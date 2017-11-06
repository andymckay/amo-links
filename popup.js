var URLs = {
 'manage': 'https://addons.mozilla.org/LOCALE/developers/addon/ADDON-NAME/edit',
 'stats': 'https://addons.mozilla.org/LOCALE/firefox/addon/ADDON-NAME/statistics/'
}

browser.tabs.query({currentWindow: true, active: true})
.then((tabs) => {
  var tab = tabs[0];
  var url = new URL(tab.url); 
  var parts = url.pathname.split('\/');
    

  if (parts[3] === "addon" && parts[4]) {
    let addonName = parts[4];
    let locale = parts[1];
    
    for (let key of Object.keys(URLs)) {
      let value = URLs[key].replace('LOCALE', locale).replace('ADDON-NAME', addonName);
      document.getElementById(key).href = value;
    }
  };
});