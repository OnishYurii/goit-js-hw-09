!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("h6c0i"),r=document.querySelector(".form");document.querySelector('input[name = "amount"]');function a(e,n){return new Promise((function(o,t){var i=Math.random()>.3,r={position:e,delay:n};setTimeout((function(){i?o(r):t(r)}),n)}))}r.addEventListener("submit",(function(e,n,o,t){e.preventDefault();for(var r=0;r<n+1;r++){a(r+1,o.value+t.value*r).then((function(e){var n=e.position,o=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.b314a28d.js.map
