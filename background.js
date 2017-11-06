browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url.startsWith('https://addons.mozilla.org/en-US/firefox/addon')) {
    browser.pageAction.show(tab.id);
  }
})