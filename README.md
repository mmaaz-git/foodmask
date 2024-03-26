
# Foodmask

A Chrome extension that masks pictures of food so you don't get tempted while fasting :) 
On a more serious note, it demonstrates the use of quantized machine learning models that can run locally on your browser -- which I am personally extremely excited about (see below for more details).

## Getting Started
1. Clone the repo and enter the project directory.
1. Install the necessary dependencies:
    ```bash
    npm install 
    ```

1. Build the project:
    ```bash
    npm run build 
    ```

1. Add the extension to your browser. To do this, go to `chrome://extensions/`, enable developer mode (top right), and click "Load unpacked". Select the `build` directory from the dialog which appears and click "Select Folder".

1. Navigate to a webpage, open the popup and click the button. In a few seconds all the food pictures should be grayed out! Try it out on the sample page given in `public/test.html`.

## How it works
The extension uses [https://huggingface.co/docs/transformers.js/en/index](Transformer.js), a brilliant library which lets you run machine learning models locally. There is now a large collection of quantized models on Huggingface which are small enough to run pretty fast with the limited CPU of your web browser. In particular, this extension uses [https://huggingface.co/Xenova/clip-vit-base-patch32](Xenova/clip-vit-base-patch32) which is a quantized version of OpenAI's [https://huggingface.co/openai/clip-vit-base-patch32](CLIP) model. The model is a multimodal vision-language model, trained on pairs of images and text. Hence, it can perform zero-shot classification. In this case, the extension asks it to classify all images on the current webpage (identified by the `img` tag) as 'food' or 'not food', and takes the image to be food if the probability assigned to food is greater than 0.6. I'm extremely excited by the potential of quantized models and was pleasantly surprised at how fast this model can run on my browser, given its power.

I learned how to integrate Transformers.js into a Chrome extension by studying the example given in the [https://github.com/xenova/transformers.js](Transformers.js repo).
