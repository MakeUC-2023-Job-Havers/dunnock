let readingContent = document.querySelectorAll('a > h3');
let readingList = [];

readingContent.forEach(element => {
    if(element.href){
        readingList.push(element.href);
    }
    
});

