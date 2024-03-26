const images = document.getElementsByTagName('img');
Array.from(images).forEach((img) => {
    // Send each image URL to the background script for classification
    chrome.runtime.sendMessage({imageUrl: img.src, action: "classify"}, function(response) {
        try {
            if (response.shouldHide) {
                img.style = '';
                img.src = ''; 
                img.srcset = ''; 
                img.alt = '';
                img.style.background = 'gray';
                console.log(img.src + " hidden!");
            }
        } catch (error) {
            console.error("Error trying to hide image: ", error)
        }
    });
});

