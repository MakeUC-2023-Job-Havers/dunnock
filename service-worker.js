function Checkwebsites(websiteurl){
    let satireurl = ["theonion.com", "cracked.com" , "babylonbee.com"];
    if (websiteurl.length === 0 ) {
        return "The website url provided is empty";
    }
    let infunction = new URL(websiteurl) ;

    satireurl.forEach( (url) => {
        if (url == infunction.hostname){
            return "This is a satire site, displays funny information"
        }
    } )
}
