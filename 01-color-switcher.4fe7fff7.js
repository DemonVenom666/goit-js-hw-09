!function(){var t={startBtnChangeColor:document.querySelector("[data-start]"),stopBtnColor:document.querySelector("[data-stop]"),allBody:document.querySelector("body")};t.startBtnChangeColor.addEventListener("click",(function(){o=setInterval((function(){t.allBody.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.startBtnChangeColor.disabled=!0})),t.stopBtnColor.addEventListener("click",(function(){clearInterval(o),t.startBtnChangeColor.disabled=!1}));var o=null}();
//# sourceMappingURL=01-color-switcher.4fe7fff7.js.map
