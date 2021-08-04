chrome.action.onClicked.addListener(async () => {
    const queryResult = await chrome.tabs.query({
        active: true,
        currentWindow: true,
        url: 'https://support.google.com/s/community/*'
    })
    const communityConsoleTabId = queryResult[0]?.id

    if (communityConsoleTabId == null) {
        return
    }

    chrome.scripting.executeScript({
        files: ['script.js'],
        target: {
            tabId: communityConsoleTabId
        }
    })
})
