// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {
      "message": "clicked_browser_action",
      "url": "http://www.hotstar.com/get_cdn_token.php"
    });
  });
});

// This block is new!
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      /* Get M3U8 URL */
      var xhr = new XMLHttpRequest();
      xhr.open("GET", request.url, true);
      xhr.send(null);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          resp = JSON.parse(xhr.responseText);
          m3u8Url = (typeof(resp.resultObj) !== 'undefined' && typeof(resp.resultObj.src) !== 'undefined') ? resp.resultObj.src : '';
          if(m3u8Url !== '') {
            chrome.tabs.create({'url': 'https://www.hlsplayer.net/'}, function(tab1) {
              chrome.tabs.executeScript(tab1.id, {
                code: " document.getElementById('player-src').value='"+m3u8Url+"';  document.getElementById('player-start').click();"
              });
            });
          } else {
            alert("Sorry, your request could not validate. Please try again.")
          }
        }
      }
    }
  }
);