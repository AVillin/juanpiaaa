(function(window){var svgSprite='<svg><symbol id="icon-home" viewBox="0 0 1024 1024"><path d="M524.8 78.189714a18.724571 18.724571 0 0 0-25.6 0L152.722286 397.312A20.333714 20.333714 0 0 0 146.285714 412.306286v498.688c0 21.942857 17.261714 39.862857 38.473143 39.862857h160.329143a19.602286 19.602286 0 0 0 19.236571-19.968V659.163429h296.228572l0.438857 271.725714c0 10.971429 8.630857 19.968 19.236571 19.968h159.012572c21.211429 0 38.473143-17.846857 38.473143-39.862857V412.306286a20.260571 20.260571 0 0 0-6.436572-14.921143L524.8 78.189714z"  ></path></symbol><symbol id="icon-leimupinleifenleileibie" viewBox="0 0 1024 1024"><path d="M320 64H192c-70.4 0-128 57.6-128 128v128c0 70.4 57.6 128 128 128h128c70.4 0 128-57.6 128-128V192c0-70.4-57.6-128-128-128z m448 0H640c-70.4 0-128 57.6-128 128v128c0 70.4 57.6 128 128 128h128c70.4 0 128-57.6 128-128V192c0-70.4-57.6-128-128-128zM320 512H192c-70.4 0-128 57.6-128 128v128c0 70.4 57.6 128 128 128h128c70.4 0 128-57.6 128-128V640c0-70.4-57.6-128-128-128z m448 0H640c-70.4 0-128 57.6-128 128v128c0 70.4 57.6 128 128 128h128c70.4 0 128-57.6 128-128V640c0-70.4-57.6-128-128-128z" fill="#AAAAAA" ></path></symbol><symbol id="icon-gouwuche" viewBox="0 0 1024 1024"><path d="M357.44 766.4q18.24 0 34.56 6.72t28.8 18.72 19.2 28.32 6.72 34.56-6.72 34.56-19.2 28.32-28.8 19.2-34.56 7.2q-19.2 0-35.04-7.2t-28.32-19.2-19.2-28.32-6.72-34.56 6.72-34.56 19.2-28.32 28.32-18.72 35.04-6.72zM756.8 768.32q18.24 0 35.04 6.72t28.8 18.72 19.2 28.32 7.2 34.56-7.2 34.56-19.2 28.32-28.8 19.2-35.04 7.2-34.56-7.2-28.32-19.2-19.2-28.32-7.2-34.56 7.2-34.56 19.2-28.32 28.32-18.72 34.56-6.72zM918.08 223.04q26.88 0 41.76 7.2t21.12 17.76 5.76 22.56-3.36 20.64-12 35.52-20.64 59.04-22.56 63.84-16.8 49.92q-12.48 38.4-31.68 53.28t-47.04 14.88l-32.64 0-62.4 0-81.6 0-89.28 0-238.08 0 14.4 86.4 483.84 0q46.08 0 46.08 39.36 0 19.2-9.12 33.12t-36 13.92l-46.08 0-89.28 0-110.4 0-112.32 0-92.16 0-52.8 0q-19.2 0-32.16-8.64t-21.6-22.56-13.92-30.24-8.16-30.72q-0.96-5.76-5.28-27.84t-10.56-55.2-13.92-73.92-15.36-82.08q-18.24-96.96-41.28-216l-72 0q-14.4 0-24-7.2t-15.84-17.28-8.64-21.6-2.4-21.12q0-19.2 12.96-31.68t35.04-12.48l21.12 0 19.2 0 24 0 32.64 0q19.2 0 30.72 5.76t18.24 14.4 9.6 18.24 4.8 16.32q1.92 7.68 3.84 21.6t3.84 28.32q2.88 17.28 5.76 36.48l656.64 0z" fill="#B0B0B0" ></path></symbol><symbol id="icon-wodedangxuan1-copy" viewBox="0 0 1024 1024"><path d="M512 12.8C236.544 12.8 12.8 236.544 12.8 512s223.744 499.2 499.2 499.2 499.2-223.744 499.2-499.2S787.456 12.8 512 12.8z m238.592 733.184c-5.632 6.656-14.336 11.264-23.552 11.264H295.936c-8.704 0-17.92-4.608-23.552-11.264-5.632-7.68-7.68-16.896-5.632-25.6 20.992-105.984 102.4-186.368 203.776-204.288C420.352 498.688 384 450.56 384 394.752c0-70.144 57.856-128 128-128s128 57.856 128 128c0 57.344-38.4 105.984-90.624 122.368 19.968 3.072 40.96 8.704 61.44 16.896 11.776 4.608 15.36 7.68 22.528 11.264 64.512 36.864 109.056 100.352 123.904 175.104 2.048 9.216 0 17.92-6.656 25.6z" fill="#949494" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)