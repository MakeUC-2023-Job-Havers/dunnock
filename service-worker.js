// /(^oo^)\ 
function Checkwebsites(websiteurl){
    let satireurl = ["theonion.com", "cracked.com" , "babylonbee.com"];
    if (websiteurl.length === 0 ) {
        return "The website url provided is empty";
    }
    let givensiteUrl = new URL(websiteurl) ;

    satireurl.forEach( (url) => {
        if (url == givensiteUrl.hostname){
            alert("We have a Satire Site");
            return "This is a satire site, displays funny information";
        }
    } )
}

chrome.runtime.onMessage.addListener(async (message, sender) => {
    if (message.type === 'open_side_panel') {
        await chrome.sidePanel.open({ tabId: sender.tab.id });
    }
})

// readingList.forEach(element => {
//     Checkwebsites(element);
// });
