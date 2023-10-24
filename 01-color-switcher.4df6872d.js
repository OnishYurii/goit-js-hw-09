const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.body;let n;t.addEventListener("click",(function(){n=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(()=>{clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.4df6872d.js.map
