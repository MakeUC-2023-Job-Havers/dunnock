let readingContent = document.querySelectorAll('a > h3');
let readingList = [];

readingContent.forEach(element => {
    console.log("readingContent");
    if(element.href){
        readingList.push(element.href);
    }
    
});
(async() =>{
    const response = await chrome.runtime.sendMessage({
        list: readingList});
})();
alert('Hello, world!');