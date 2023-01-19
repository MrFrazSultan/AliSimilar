// background.js
chrome.browserAction.onClicked.addListener(function(tab) {
  // Extract item id from current URL
  var itemId = /\/(\d+)\.html/.exec(tab.url)[1];
  // Create new URL with item id
  var newUrl = "https://www.aliexpress.com/campaign/wow/gcp/findSimilar-lp/index?itemId=" + itemId;
  // Open new tab with new URL
  chrome.tabs.create({url: newUrl});
});
