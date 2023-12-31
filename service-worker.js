// TODO: This really shouldn't be hard coded, but we are running out of time so for now it will stay.
// TODO: In some edge cases, these patterns could match incorrect sites.
const labels = [
    {
        "pattern": /.*theonion\.com/,
        "name": "The Onion",
        "label": "Satire",
        "source": "https://www.cbsnews.com/pictures/dont-get-fooled-by-these-fake-news-sites/"
    },
    {
        "pattern": /70news\.wordpress\.com/,
        "name": "70News",
        "label": "Misleading Information",
        "source": "https://www.cbsnews.com/pictures/dont-get-fooled-by-these-fake-news-sites/"
    },
    {
        "pattern": /.*abcnews\.com\.co/,
        "name": "ABC News Co",
        "label": "Misleading Information",
        "source": "https://www.cbsnews.com/pictures/dont-get-fooled-by-these-fake-news-sites/"
    },
    {
        "pattern": /.*infowars\.com/,
        "name": "InfoWars",
        "label": "Misleading Information",
        "source": "https://www.cbsnews.com/pictures/dont-get-fooled-by-these-fake-news-sites/"
    },
    {
        "pattern": /.*yournewswire\.com/,
        "name": "YourNewsWire",
        "label": "Misleading Information",
        "source": "https://www.cbsnews.com/pictures/dont-get-fooled-by-these-fake-news-sites/"
    },
    {
        "pattern": /.*rilenews\.com/,
        "name": "Rile News",
        "label": "Satire",
        "source": "https://www.cbsnews.com/pictures/dont-get-fooled-by-these-fake-news-sites/"
    },
    {
        "pattern": /.*worldnewsreport\.com/,
        "name": "World News Report",
        "label": "Misleading Information",
        "source": "https://www.cbsnews.com/pictures/dont-get-fooled-by-these-fake-news-sites/"
    },
    {
        "pattern": /.*empirenews\.net/,
        "name": "Empire News",
        "label": "Satire",
        "source": "https://www.cbsnews.com/pictures/dont-get-fooled-by-these-fake-news-sites/"
    },
    {
        "pattern": /.*politicops\.com/,
        "name": "Newslo",
        "label": "Satire",
        "source": "https://www.cbsnews.com/pictures/dont-get-fooled-by-these-fake-news-sites/"
    },
    {
        "pattern": /.*huzlers\.com/,
        "name": "Huzlers",
        "label": "Satire",
        "source": "https://www.cbsnews.com/pictures/dont-get-fooled-by-these-fake-news-sites/"
    },
    {
        "pattern": /.*thebostontribune\.com/,
        "name": "The Boston Tribune",
        "label": "Misleading Information",
        "source": "https://www.cbsnews.com/pictures/dont-get-fooled-by-these-fake-news-sites/"
    },
    {
        "pattern": /.*christiantimes\.com/,
        "name": "Christian Times",
        "label": "Misleading Information",
        "source": "https://www.cbsnews.com/pictures/dont-get-fooled-by-these-fake-news-sites/"
    },
    {
        "pattern": /.*now8news\.com/,
        "name": "Now 8 News",
        "label": "Satire",
        "source": "https://www.cbsnews.com/pictures/dont-get-fooled-by-these-fake-news-sites/"
    },
    {
        "pattern": /.*empireherald\.com/,
        "name": "Empire Herald",
        "label": "Satire",
        "source": "https://www.cbsnews.com/pictures/dont-get-fooled-by-these-fake-news-sites/"
    },
    {
        "pattern": /.*burrardstreetjournal\.com/,
        "name": "The Burrard Street Journal",
        "label": "Satire",
        "source": "https://www.cbsnews.com/pictures/dont-get-fooled-by-these-fake-news-sites/"
    },
    {
        "pattern": /.*react365\.com/,
        "name": "React 365",
        "label": "Misleading Information",
        "source": "https://www.cbsnews.com/pictures/dont-get-fooled-by-these-fake-news-sites/"
    },
    {
        "pattern": /.*civictribune\.com/,
        "name": "Civic Tribune",
        "label": "Satire",
        "source": "https://www.cbsnews.com/pictures/dont-get-fooled-by-these-fake-news-sites/"
    },
    {
        "pattern": /.*realnewsrightnow\.com/,
        "name": "Real News Right Now",
        "label": "Satire",
        "source": "https://www.cbsnews.com/pictures/dont-get-fooled-by-these-fake-news-sites/"
    },
    {
        "pattern": /.*nationalreport\.net/,
        "name": "National Report",
        "label": "Misleading Information",
        "source": "https://www.cbsnews.com/pictures/dont-get-fooled-by-these-fake-news-sites/"
    },
    {
        "pattern": /.*ifyouonlynews\.com/,
        "name": "If You Only News",
        "label": "Misleading Information",
        "source": "https://www.cbsnews.com/pictures/dont-get-fooled-by-these-fake-news-sites/"
    }
]

/**
 * Check if the website needs a label.
 * @param {String} websiteUrl A string that represents an URL
 * @returns The label options if there was a match; false otherwise.
 */
async function CheckWebsites(websiteUrl) {
    // Convert to an URL object
    let givenSiteUrl = new URL(websiteUrl);
    let match = false;

    // Check if the URL matches any of the patterns
    labels.forEach((label) => {
        if (givenSiteUrl.hostname.match(label.pattern)) {
            match = label;
        }
    })

    return match;
}

// Listen for and handle any messages from the other scripts.
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {

    switch (message.type) {
        case 'open_side_panel':
            await chrome.sidePanel.open({ tabId: sender.tab.id });
            break;

        case 'populate_side_panel':
            // TODO: Actually populate the side panel
            break;

        case 'check_label':
            let result = await CheckWebsites(message.url);
            console.log(result);
            // TODO: We are clearly doing something wrong here, as the result 
            // does not transfer to the original message sender, it always gets 
            // sent back as undefined. result is defined and correct here so it 
            // is something with how we are sending the response but the API for 
            // this is a little confusing.
            sendResponse({ data: result });
            return true;
            break;

        default:
            break;
    }

})
