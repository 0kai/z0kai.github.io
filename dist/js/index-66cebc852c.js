!function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var o=document.createElement("div");o.id="toast-div",document.body.appendChild(o);var e=t(o),n=function(t,o){var n=o||{},d=n.fadeIn||400,r=n.delay||1e3,a=n.fadeOut||400,i=n.bottom||"50%";e.css({width:"400px",display:"none",position:"fixed",left:"50%","margin-left":"-200px","line-height":"1.8",bottom:i,"background-color":"#666",color:"#F0F0F0","font-size":"15px","box-sizing":"border-box",padding:"10px 20px 10px 20px","text-align":"center","border-radius":"5px","-webkit-box-shadow":"0px 0px 24px -1px rgba(56, 56, 56, 1)","-moz-box-shadow":"0px 0px 24px -1px rgba(56, 56, 56, 1)","box-shadow":"0px 0px 24px -1px rgba(56, 56, 56, 1)","z-index":1e5}),t&&(e.html(t),e.stop().fadeIn(d).delay(r).fadeOut(a))};function d(t){return t}(function(o,e,r,a){void 0===e&&(e="GET"),void 0===r&&(r={}),void 0===a&&(a=3e3);var i={url:"http://106.14.106.37:8080"+o,type:e,data:function(t){var o="";for(var e in t)o+=e+"="+encodeURIComponent(t[e])+"&";return o}(r),processData:!1,contentType:"application/x-www-form-urlencoded;",timeout:a};return t.support.cors=!0,t.ajax(i).then(d).fail(function(t){t&&n(t),console.log("request error",t)})})("/like-k/SZ000623/history","GET",{mobile:"15759580813"}).done(function(t){t.success&&(n("读取成功",{delay:800}),console.log(t.result))});for(var r=[],a={id:"122031217",name:"张三",phone:"15759580000",adr:"福建 . 漳州",text:"哈哈哈"},i=0;i<20;i+=1)r.push(a);var p=t(".tbody");r.forEach(function(o){var e,n=t("<tr>\n    <td>"+(e=o).id+"</td>\n    <td>"+e.name+"</td>\n    <td>"+e.phone+"</td>\n    <td>"+e.adr+"</td>\n    <td>"+e.text+"</td>\n  </tr>");p.append(n)})}($);
