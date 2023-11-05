// chrome.runtime.onInstalled.addListener(() => {
//     chrome.contextMenus.create({
//       id: 'openSidePanel',
//       title: 'Open side panel',
//       contexts: ['all']
//     });
//     chrome.tabs.create({ url: 'page.html' });
//   });

document.addEventListener('keydown', (e) => {
    if (e.key == 'k') {
        console.log('side panel opened');
        chrome.sidePanel.open();
    }
})

