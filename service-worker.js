// /(^oo^)\ 
function Checkwebsites(websiteurl){
    let satireurl = ["theonion.com", "cracked.com" , "babylonbee.com"];
    if (websiteurl.length === 0 ) {
        return "The website url provided is empty";
    }
    let givensiteUrl = new URL(websiteurl) ;

    satireurl.forEach( (url) => {
        if (url == givensiteUrl.hostname){
            return "This is a satire site, displays funny information";
        }
    } )
}
