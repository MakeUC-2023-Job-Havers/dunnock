// /(^oo^)\ 

function Checkwebsites(websiteurl){
    let satireurl = ["https://www.theonion.com", "cracked.com" , "babylonbee.com"];
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
};
(async() =>{
    const [tab] = await chrome.tabs.query({active:true, lastFocusWindow: true});
    const response = await chrome.tabs.sendMessage(tab.id,{readingList});
    readingList.forEach(element => {
        Checkwebsites(element);
    });
})

