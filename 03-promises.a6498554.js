!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("h6c0i"),i={form:document.querySelector(".form"),btn:document.querySelector(".submit")};function u(e,n){var o=Math.random()>.3;return new Promise((function(t,r){setTimeout((function(){o?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}i.form.addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements,o=n.delay,t=n.step,a=n.amount;o=Number(o.value),t=Number(t.value),a=Number(a.value);for(var c=1;c<=a;c+=1)u(c,o).then((function(e){var n=e.position,o=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"),{useIcon:!1})})).catch((function(e){var n=e.position,o=e.delay;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"),{useIcon:!1})})),o+=t;i.btn.disabled=!0}))}();
//# sourceMappingURL=03-promises.a6498554.js.map
