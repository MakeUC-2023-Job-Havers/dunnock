let results = document.querySelectorAll('a > h3');

results.forEach((h3) => {
    let label = document.createElement('span');
    label.classList.add('fact-label');
    label.addEventListener('click', async () => {
        console.log('label clicked');
        await chrome.runtime.sendMessage({
            type: 'open_side_panel'
        });
        chrome.runtime.sendMessage({
            type: 'populate_side_panel', data: {
                // Get and send the URL to the service worker.
                url: h3.parentElement.href
            }
        })
    });
    let labelText = document.createTextNode('Misleading Claim');
    label.appendChild(labelText);

    h3.parentElement.style.display = 'inline-block';

    h3.parentElement.parentElement.prepend(label);
})