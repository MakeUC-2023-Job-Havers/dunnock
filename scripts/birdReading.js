let readingContent = document.querySelectorAll('a > h3');

/**
 * Creates and adds a label to the search results page.
 * @param {h3} h3 An h3 element whose parent is the link to the search result.
 * @param {Object} data The details/configuration for this label.
 */
function applyLabel(h3, data) {
    // Create the label
    let label = document.createElement('span');
    label.classList.add('fact-label');
    // When clicked the label should open the side panel where more information and context will be shown.
    // TODO: We have not fully implemented the side panel as of now, but this 
    // code should show the placeholder we are currently using
    label.addEventListener('click', async () => {
        // This tells the service worker to open the side panel.
        await chrome.runtime.sendMessage({
            type: 'open_side_panel'
        });
        // This sends the data to the side panel for display
        chrome.runtime.sendMessage({
            type: 'populate_side_panel', data: {
                // Get and send the URL to the service worker.
                url: h3.parentElement.href
            }
        })
    });
    // Create the label text and append it to the label
    let labelText = document.createTextNode(data.label);
    label.appendChild(labelText);

    // This is necessary so that the label will go on the same line as the search result title
    h3.parentElement.style.display = 'inline-block';

    // Add the label to the DOM to the front of the container holding the 'a' tag
    h3.parentElement.parentElement.prepend(label);
}

// Loop through each of the search results and check if we need to apply a label
readingContent.forEach(async (element) => {
    // Ensure that the parentNode has a link
    if (element.parentNode.href) {
        // Ask the service-worker if we need to apply a label to this search result and store the response
        // TODO: This is the current source of our issue, we are only ever getting back an undefined response
        const response = await chrome.runtime.sendMessage({
            type: 'check_label',
            url: element.parentNode.href
        });
        // If the response has a non-empty data attribute then we need to apply a label.
        if (response?.data != {}) {
            applyLabel(element, response.data);
        }
    }

});

