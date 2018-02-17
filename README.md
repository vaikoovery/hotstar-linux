# hotstar-linux
A simple Google Chromium extension to play hotstar videos on your Linux machine, which is not supported by Hotstar yet!
Hotstar has updated their APIs and [sweta20's extension](https://github.com/sweta20/hotstar-linux) stopped working.

Many people have faced the problem of streaming hotstar videos on linux. It is a simple plugin when added to browser helps resolve the issue.
Refer: http://askubuntu.com/questions/778906/problem-playing-hotstar-videos

# How to install?
1. Download the [repository as zip](https://github.com/vaikoovery/hotstar-linux/archive/master.zip) or clone the code.
2. Visit _chrome://extensions_ (via omnibox or menu -> Tools -> Extensions).
3. Enable Developer mode by ticking the checkbox in the upper-right corner.
4. Click on the "Load unpacked extension..." button.
5. Select the directory containing your unpacked extension/cloned files+.

# How to use:

1. Open the link of the hotstar video you want to watch (You will see the video player loader rotates for ever!).
2. Now click on the icon <img src="https://raw.githubusercontent.com/vaikoovery/hotstar-linux/master/icon.png" width="20px" height="20px" alt="Hotstar Icon" /> in the extensions block.
3. The website https://www.hlsplayer.net will be opened in a new tab.

# Flash is needed? How to install flash on my apt?

1. Open `/etc/apt/sources.list` and add 
```
deb http://archive.canonical.com/ubuntu yakkety partner
```
to end of file. If following lines are commented, uncomment both.
1.1 Ubuntu < 16.04
```
deb http://archive.canonical.com/ubuntu trusty partner
deb-src http://archive.canonical.com/ubuntu trusty partner
```
1.2 In Ubuntu 16.04
```
deb http://archive.canonical.com/ubuntu xenial partner
deb-src http://archive.canonical.com/ubuntu xenial partner
```
3. and run
```
sudo apt update
```
4. Finally, run
```
sudo apt install adobe-flashplugin
```
