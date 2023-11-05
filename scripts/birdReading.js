let readingContent = document.querySelectorAll('a > h3');
let readingList = [];

readingContent.forEach(element => {
    if(element.parentElement.href){
        readingList.push(element.parentElement.href);

    }
    
});
(async() =>{
    const response = await chrome.runtime.sendMessage({
        list: readingList});
})();
