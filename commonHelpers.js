import{i as l}from"./assets/bi_x-octagon-1bab7fb8.js";/* empty css                      */import{f as m,i as f}from"./assets/vendor-651d7991.js";const t={dateTime:document.querySelector("input#datetime-picker"),dataDay:document.querySelector("[data-days]"),dataHours:document.querySelector("[data-hours]"),dataMinutes:document.querySelector("[data-minutes]"),dataSeconds:document.querySelector("[data-seconds]"),buttonStart:document.querySelector("[data-start]")};t.buttonStart.disabled=!0;t.buttonStart.addEventListener("click",y);let s;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){s=e[0],s<Date.now()?(t.buttonStart.disabled=!0,f.error({message:"Please choose a date in the future",position:"topRight",iconUrl:l,messageColor:"#FFF",backgroundColor:"#EF4040",messageSize:"16px"})):t.buttonStart.disabled=!1}};m(t.dateTime,S);const h=new Date;function y(){let a=new Date(t.dateTime.value)-h;const r=setInterval(()=>{const o=b(a);t.dataDay.textContent=n(o.days),t.dataHours.textContent=n(o.hours),t.dataMinutes.textContent=n(o.minutes),t.dataSeconds.textContent=n(o.seconds),a-=1e3,t.buttonStart.disabled=!0,a<=0&&clearInterval(r)},1e3)}function n(e){return String(e).padStart(2,"0")}function b(e){const u=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),c=Math.floor(e%864e5%36e5%6e4/1e3);return{days:u,hours:d,minutes:i,seconds:c}}
//# sourceMappingURL=commonHelpers.js.map