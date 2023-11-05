// /(^oo^)\ 

function Checkwebsites(websiteurl){
    let satireurl = ["https://www.theonion.com", "cracked.com" , "babylonbee.com"];
    if (websiteurl.length === 0 ) {
        return "The website url provided is empty";
    }
    let givensiteUrl = new URL(websiteurl) ;

    satireurl.forEach( (url) => {
        if (url == givensiteUrl.hostname){
            console.log("We have a satire site.");
            return "This is a satire site, displays funny information";
        }
    } )
};
chrome.runtime.onMessage.addListener(
    
    function(request,sender,sendResponse){
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
            if (request.list){
            request.list.forEach(element => {
                Checkwebsites(element);
                
            });
        }
    }
)

