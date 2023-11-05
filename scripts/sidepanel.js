// Listen for the message to populate the side panel
// TODO: This is all just a placeholder for now
chrome.runtime.onMessage.addListener(async (message, sender) => {
    if (message.type === 'populate_side_panel') {
        console.log(JSON.stringify(message.data));
        let data = document.createTextNode(message.data);
        document.body.appendChild(data);
    }
})

