// /(^oo^)\ 
console.log("Running file");
function Checkwebsites(websiteurl){
    let satireurl = ["https://www.theonion.com", "cracked.com" , "babylonbee.com"];
    console.log("Before If");
    if (websiteurl.length === 0 ) {
        console.log("Empty");
        return "The website url provided is empty";
    }
    let givensiteUrl = new URL(websiteurl) ;

    satireurl.forEach( (url) => {
        console.log("Before Second If");
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
        
        request.list.forEach(element => {
            console.log("Loop is running.");
            Checkwebsites(element);
            
        });
    }
)

