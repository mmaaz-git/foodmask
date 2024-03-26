document.getElementById('classifyImages').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            files: ["content.js"]
        });
    });
});

document.getElementById('explainertoggle').addEventListener('click', function() {
    // The function to toggle the visibility of the explanation text
    var explanation = document.getElementById('explanation');
    if (explanation.style.display === 'none') {
        explanation.style.display = 'block';
    } else {
        explanation.style.display = 'none';
    }
});

