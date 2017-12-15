

// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var res = window.location.pathname.split( '/' );
      var id = res[res.length-1];
      if(isNaN(id) === false) {
        /* Get CDN Token */
        var xhrToken = new XMLHttpRequest();
        xhrToken.open("GET", request.url, true);
        xhrToken.send(null);
        xhrToken.onreadystatechange = function() {
          if (typeof(xhrToken) !== 'undefined' && xhrToken.readyState == 4 && xhrToken.status == 200) {
            var toeknResp = JSON.parse(xhrToken.responseText);
            var token = toeknResp.token;
            var cdnUrl = "https://secure-getcdn.hotstar.com/AVS/besc?hotstarauth="+
              token + "&action=GetCDN&appVersion=5.0.40&asJson=Y&channel=TABLET&id="+
              id + "&type=VOD";

            /* Get CDN URL */
            var xhr = new XMLHttpRequest();
            xhr.open("GET", cdnUrl, true);
            xhr.send(null);
            chrome.runtime.sendMessage({"message": "open_new_tab", "url": cdnUrl});
          }
        }
      }
    }
  }
);