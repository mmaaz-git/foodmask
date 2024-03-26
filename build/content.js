/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msc0NBQXNDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRlbnNpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vc3JjL2NvbnRlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKTtcbkFycmF5LmZyb20oaW1hZ2VzKS5mb3JFYWNoKChpbWcpID0+IHtcbiAgICAvLyBTZW5kIGVhY2ggaW1hZ2UgVVJMIHRvIHRoZSBiYWNrZ3JvdW5kIHNjcmlwdCBmb3IgY2xhc3NpZmljYXRpb25cbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7aW1hZ2VVcmw6IGltZy5zcmMsIGFjdGlvbjogXCJjbGFzc2lmeVwifSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zaG91bGRIaWRlKSB7XG4gICAgICAgICAgICAgICAgaW1nLnN0eWxlID0gJyc7XG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9ICcnOyBcbiAgICAgICAgICAgICAgICBpbWcuc3Jjc2V0ID0gJyc7IFxuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnJztcbiAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZCA9ICdncmF5JztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbWcuc3JjICsgXCIgaGlkZGVuIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB0cnlpbmcgdG8gaGlkZSBpbWFnZTogXCIsIGVycm9yKVxuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9