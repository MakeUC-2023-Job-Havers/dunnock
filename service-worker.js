// /(^oo^)\ 
console.log("Running file");
function Checkwebsites(websiteurl){
    let satireurl = [/.*theonion\.com/, /.*cracked\.com/ , /.*babylonbee\.com/];
    
    if (websiteurl.length === 0 ) {
        console.log("Empty");
        return "The website url provided is empty";
    }
    let givensiteUrl = new URL(websiteurl) ;

    satireurl.forEach( (pattern) => {

        if (givensiteUrl.hostname.match(pattern)){
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
        console.log(request.list);
        request.list.forEach(element => {
            Checkwebsites(element);
            
        });
    }
)

