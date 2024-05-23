(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".ticket__container"),t=document.querySelector(".add__btn-ticket"),n=document.querySelector(".ticket__modal"),c=document.querySelector(".delete__modal"),i=document.querySelectorAll(".close__btn"),o=document.querySelector(".ticket__form"),d=document.querySelector(".confirm__DeleteBtn"),r=document.querySelector(".cancel__DeleteBtn"),s=document.querySelector(".loading__icon");let l=null;const a="https://helpdesk-backend-ef4y.onrender.com/api";function u(){fetch(`${a}?method=allTickets`).then((e=>e.json())).then(y)}function y(t){e.innerHTML="",s.style.display="block",t.forEach((t=>{const i=(r=new Date(t.created),`${String(r.getDate()).padStart(2,"0")}.${String(r.getMonth()+1).padStart(2,"0")}.${String(r.getFullYear()).slice(-2)} ${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}`),d=document.createElement("li");var r;d.dataset.id=t.id,d.innerHTML=`\n          <div class="ticket" data-id="${t.id}">\n            <input type="checkbox" class="ticket__checkbox" ${t.status?"checked":""}>\n            <div class="body__ticket">\n              <h3>${t.name}</h3>\n              <span>${i}</span>\n            </div>\n\n            <div class="btns">\n              <button class="edit__Btn"> &#9998; </button>\n              <button class="delete__Btn"> &#10006; </button>\n            </div>\n\n            <div class="show__description">\n              <p></p>\n            </div>\n          </div>\n        `;const s=d.querySelector(".ticket__checkbox");s&&s.addEventListener("click",(e=>{var n;e.stopPropagation(),n=t.id,fetch(`${a}?method=ticketById&id=${n}`).then((e=>e.json())).then((e=>(e.status=!e.status,fetch(`${a}?method=updateById&id=${n}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})))).then(u)}));const y=d.querySelector(".edit__Btn");y&&y.addEventListener("click",(e=>{var c;e.stopPropagation(),c=t.id,fetch(`${a}?method=ticketById&id=${c}`).then((e=>e.json())).then((e=>{l=c,n.querySelector(".modal__title").innerText="Изменить тикет",o.querySelector(".ticket__id").value=e.id,o.querySelector(".input__text").value=e.name,o.querySelector(".textarea__description").value=e.description,n.style.display="block"}))}));const _=d.querySelector(".delete__Btn");_&&_.addEventListener("click",(e=>{var n;e.stopPropagation(),n=t.id,l=n,c.style.display="block"}));const p=d.querySelector(".body__ticket");p&&p.addEventListener("click",(()=>{var e;e=t.id,fetch(`${a}?method=ticketById&id=${e}`).then((e=>e.json())).then((e=>{const t=document.querySelector(`.ticket[data-id="${e.id}"]`),n=t.querySelector(".show__description");t.classList.contains("ticket__show")?(n.style.display="none",t.classList.remove("ticket__show")):(n.querySelector("p").textContent=e.description,n.style.display="block",t.classList.add("ticket__show"))})).catch((e=>console.error("Error fetching ticket details:",e)))})),e.appendChild(d)})),s.style.display="none"}function _(){n.style.display="none",c.style.display="none"}i.forEach((e=>{e.addEventListener("click",_)})),t.addEventListener("click",(()=>{n.querySelector(".modal__title").innerText="Добавить тикет",o.reset(),o.querySelector(".ticket__id").value="",n.style.display="block"})),o.addEventListener("submit",(function(e){e.preventDefault();const t=o.querySelector(".ticket__id").value,c=o.querySelector(".input__text").value,i=o.querySelector(".textarea__description").value,d=t?"updateById":"createTicket";fetch(t?`${a}?method=${d}&id=${t}`:`${a}?method=${d}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c,description:i})}).then((()=>{n.style.display="none",u()}))})),d.addEventListener("click",(function(){fetch(`${a}?method=deleteById&id=${l}`,{method:"GET"}).then((()=>{c.style.display="none",u()}))})),r.addEventListener("click",_),u()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBU04sRUFBSyxhQUFlLGVBRW5DMUIsTUFEWTBCLEVBQU0sR0FBRTVCLFlBQWlCa0MsUUFBYU4sSUFBUSxHQUFFNUIsWUFBaUJrQyxJQUNsRSxDQUNUQSxPQUFRLE9BQ1JDLFFBQVMsQ0FDUCxlQUFnQixvQkFFbEJDLEtBQU1DLEtBQUtDLFVBQVUsQ0FDbkJSLE9BQ0FZLGtCQUdEdkMsTUFBSyxLQUNKWixFQUFZa0IsTUFBTUMsUUFBVSxPQUM1QlQsR0FBYyxHQUVwQixJQXNDQUwsRUFBaUJULGlCQUFpQixTQXBDbEMsV0FDRWUsTUFBTyxHQUFFRiwwQkFBK0JELElBQW1CLENBQ3pEbUMsT0FBUSxRQUVQL0IsTUFBSyxLQUNKWCxFQUFZaUIsTUFBTUMsUUFBVSxPQUM1QlQsR0FBYyxHQUVwQixJQTZCQUosRUFBZ0JWLGlCQUFpQixRQUFTcUUsR0FFMUN2RCxHQUFjLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxwZGVzay1mcm9udGVuZC8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vaGVscGRlc2stZnJvbnRlbmQvLi9zcmMvanMvZm9ybWF0ZWREYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuXG5pbXBvcnQgeyBmb3JtYXRlZERhdGUgfSBmcm9tICcuL2Zvcm1hdGVkRGF0ZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IHRpY2tldExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGlja2V0X19jb250YWluZXInKTtcbiAgY29uc3QgYWRkVGlja2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZF9fYnRuLXRpY2tldCcpO1xuICBjb25zdCB0aWNrZXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aWNrZXRfX21vZGFsJyk7XG4gIGNvbnN0IGRlbGV0ZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZV9fbW9kYWwnKTtcbiAgY29uc3QgY2xvc2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlX19idG4nKTtcbiAgY29uc3QgdGlja2V0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aWNrZXRfX2Zvcm0nKTtcbiAgY29uc3QgY29uZmlybURlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtX19EZWxldGVCdG4nKTtcbiAgY29uc3QgY2FuY2VsRGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbF9fRGVsZXRlQnRuJyk7XG4gIGNvbnN0IGxvYWRpbmdJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmdfX2ljb24nKTtcblxuICBsZXQgY3VycmVudFRpY2tldElkID0gbnVsbDtcblxuICBjb25zdCBhcGlVcmwgPSAnaHR0cHM6Ly9oZWxwZGVzay1iYWNrZW5kLWVmNHkub25yZW5kZXIuY29tL2FwaSc7XG5cbiAgZnVuY3Rpb24gZmV0Y2hUaWNrZXRzKCkge1xuICAgIGZldGNoKGAke2FwaVVybH0/bWV0aG9kPWFsbFRpY2tldHNgKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZW5kZXJUaWNrZXRzKTtcbiAgfVxuXG4gIC8vINCk0YPQvdC60YbQuNGPINC00LvRjyDQvtGC0YDQuNGB0L7QstC60Lgg0YHQv9C40YHQutCwINGC0LjQutC10YLQvtCyXG4gIGZ1bmN0aW9uIHJlbmRlclRpY2tldHModGlja2V0cykge1xuICAgIHRpY2tldExpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgc2hvd0xvYWRpbmdJY29uKCk7XG4gICAgdGlja2V0cy5mb3JFYWNoKCh0aWNrZXQpID0+IHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aWNrZXQuY3JlYXRlZCk7XG4gICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZm9ybWF0ZWREYXRlKGRhdGUpO1xuICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgbGlzdEl0ZW0uZGF0YXNldC5pZCA9IHRpY2tldC5pZDtcbiAgICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGlja2V0XCIgZGF0YS1pZD1cIiR7dGlja2V0LmlkfVwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwidGlja2V0X19jaGVja2JveFwiICR7dGlja2V0LnN0YXR1cyA/ICdjaGVja2VkJyA6ICcnfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2R5X190aWNrZXRcIj5cbiAgICAgICAgICAgICAgPGgzPiR7dGlja2V0Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgPHNwYW4+JHtmb3JtYXR0ZWREYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuc1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdF9fQnRuXCI+ICYjOTk5ODsgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVfX0J0blwiPiAmIzEwMDA2OyA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvd19fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgPHA+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLnRpY2tldF9fY2hlY2tib3gnKTtcbiAgICAgIGlmIChjaGVja2JveCkge1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB0b2dnbGVUaWNrZXRTdGF0dXModGlja2V0LmlkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVkaXRCdG4gPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcuZWRpdF9fQnRuJyk7XG4gICAgICBpZiAoZWRpdEJ0bikge1xuICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIG9wZW5FZGl0TW9kYWwodGlja2V0LmlkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGVfX0J0bicpO1xuICAgICAgaWYgKGRlbGV0ZUJ0bikge1xuICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgb3BlbkRlbGV0ZU1vZGFsKHRpY2tldC5pZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBib2R5VGlja2V0ID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLmJvZHlfX3RpY2tldCcpO1xuICAgICAgaWYgKGJvZHlUaWNrZXQpIHtcbiAgICAgICAgYm9keVRpY2tldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBzaG93VGlja2V0RGV0YWlscyh0aWNrZXQuaWQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRpY2tldExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0pO1xuICAgIGhpZGVMb2FkaW5nSWNvbigpO1xuICB9XG5cbiAgLy8g0KTRg9C90LrRhtC40Y8g0LTQu9GPINC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0L/QvtC00YDQvtCx0L3QvtGB0YLQtdC5INGC0LjQutC10YLQsCDQuCDQv9C+0LrQsNC30LAg0L7Qv9C40YHQsNC90LjRj1xuICBmdW5jdGlvbiBzaG93VGlja2V0RGV0YWlscyhpZCkge1xuICAgIGZldGNoKGAke2FwaVVybH0/bWV0aG9kPXRpY2tldEJ5SWQmaWQ9JHtpZH1gKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigodGlja2V0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRpY2tldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGlja2V0W2RhdGEtaWQ9XCIke3RpY2tldC5pZH1cIl1gKTtcbiAgICAgICAgY29uc3Qgc2hvd0Rlc2NyaXB0aW9uRWxlbWVudCA9IHRpY2tldEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNob3dfX2Rlc2NyaXB0aW9uJyk7XG5cbiAgICAgICAgaWYgKHRpY2tldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0aWNrZXRfX3Nob3cnKSkge1xuICAgICAgICAgIHNob3dEZXNjcmlwdGlvbkVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICB0aWNrZXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3RpY2tldF9fc2hvdycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNob3dEZXNjcmlwdGlvbkVsZW1lbnQucXVlcnlTZWxlY3RvcigncCcpLnRleHRDb250ZW50ID0gdGlja2V0LmRlc2NyaXB0aW9uO1xuICAgICAgICAgIHNob3dEZXNjcmlwdGlvbkVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgdGlja2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0aWNrZXRfX3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdGlja2V0IGRldGFpbHM6JywgZXJyb3IpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW5FZGl0TW9kYWwoaWQpIHtcbiAgICBmZXRjaChgJHthcGlVcmx9P21ldGhvZD10aWNrZXRCeUlkJmlkPSR7aWR9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKHRpY2tldCkgPT4ge1xuICAgICAgICBjdXJyZW50VGlja2V0SWQgPSBpZDtcbiAgICAgICAgdGlja2V0TW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX190aXRsZScpLmlubmVyVGV4dCA9ICfQmNC30LzQtdC90LjRgtGMINGC0LjQutC10YInO1xuICAgICAgICB0aWNrZXRGb3JtLnF1ZXJ5U2VsZWN0b3IoJy50aWNrZXRfX2lkJykudmFsdWUgPSB0aWNrZXQuaWQ7XG4gICAgICAgIHRpY2tldEZvcm0ucXVlcnlTZWxlY3RvcignLmlucHV0X190ZXh0JykudmFsdWUgPSB0aWNrZXQubmFtZTtcbiAgICAgICAgdGlja2V0Rm9ybS5xdWVyeVNlbGVjdG9yKCcudGV4dGFyZWFfX2Rlc2NyaXB0aW9uJykudmFsdWUgPSB0aWNrZXQuZGVzY3JpcHRpb247XG4gICAgICAgIHRpY2tldE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvcGVuRGVsZXRlTW9kYWwoaWQpIHtcbiAgICBjdXJyZW50VGlja2V0SWQgPSBpZDtcbiAgICBkZWxldGVNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxuXG4gIC8vINCk0YPQvdC60YbQuNGPINC00LvRjyDQv9C10YDQtdC60LvRjtGH0LXQvdC40Y8g0YHRgtCw0YLRg9GB0LAg0YLQuNC60LXRgtCwXG4gIGZ1bmN0aW9uIHRvZ2dsZVRpY2tldFN0YXR1cyhpZCkge1xuICAgIGZldGNoKGAke2FwaVVybH0/bWV0aG9kPXRpY2tldEJ5SWQmaWQ9JHtpZH1gKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigodGlja2V0KSA9PiB7XG4gICAgICAgIHRpY2tldC5zdGF0dXMgPSAhdGlja2V0LnN0YXR1cztcblxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7YXBpVXJsfT9tZXRob2Q9dXBkYXRlQnlJZCZpZD0ke2lkfWAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGlja2V0KSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZmV0Y2hUaWNrZXRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhdmVUaWNrZXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpZCA9IHRpY2tldEZvcm0ucXVlcnlTZWxlY3RvcignLnRpY2tldF9faWQnKS52YWx1ZTtcbiAgICBjb25zdCBuYW1lID0gdGlja2V0Rm9ybS5xdWVyeVNlbGVjdG9yKCcuaW5wdXRfX3RleHQnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRpY2tldEZvcm0ucXVlcnlTZWxlY3RvcignLnRleHRhcmVhX19kZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IG1ldGhvZCA9IGlkID8gJ3VwZGF0ZUJ5SWQnIDogJ2NyZWF0ZVRpY2tldCc7XG4gICAgY29uc3QgdXJsID0gaWQgPyBgJHthcGlVcmx9P21ldGhvZD0ke21ldGhvZH0maWQ9JHtpZH1gIDogYCR7YXBpVXJsfT9tZXRob2Q9JHttZXRob2R9YDtcbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aWNrZXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBmZXRjaFRpY2tldHMoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY29uZmlybURlbGV0ZSgpIHtcbiAgICBmZXRjaChgJHthcGlVcmx9P21ldGhvZD1kZWxldGVCeUlkJmlkPSR7Y3VycmVudFRpY2tldElkfWAsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgZGVsZXRlTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZmV0Y2hUaWNrZXRzKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgdGlja2V0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkZWxldGVNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgY2xvc2VCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuICB9KTtcblxuICBhZGRUaWNrZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdGlja2V0TW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX190aXRsZScpLmlubmVyVGV4dCA9ICfQlNC+0LHQsNCy0LjRgtGMINGC0LjQutC10YInO1xuICAgIHRpY2tldEZvcm0ucmVzZXQoKTtcbiAgICB0aWNrZXRGb3JtLnF1ZXJ5U2VsZWN0b3IoJy50aWNrZXRfX2lkJykudmFsdWUgPSAnJztcbiAgICB0aWNrZXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfSk7XG5cbiAgZnVuY3Rpb24gc2hvd0xvYWRpbmdJY29uKCkge1xuICAgIGxvYWRpbmdJY29uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUxvYWRpbmdJY29uKCkge1xuICAgIGxvYWRpbmdJY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICB0aWNrZXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHNhdmVUaWNrZXQpO1xuXG4gIGNvbmZpcm1EZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb25maXJtRGVsZXRlKTtcbiAgY2FuY2VsRGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG5cbiAgZmV0Y2hUaWNrZXRzKCk7XG59KTtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0ZWREYXRlKGRhdGUpIHtcbiAgY29uc3QgZGF5ID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICBjb25zdCBtb250aCA9IFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICBjb25zdCB5ZWFyID0gU3RyaW5nKGRhdGUuZ2V0RnVsbFllYXIoKSkuc2xpY2UoLTIpOyAvLyDQn9C+0YHQu9C10LTQvdC40LUg0LTQstC1INGG0LjRhNGA0Ysg0LPQvtC00LBcbiAgY29uc3QgaG91cnMgPSBTdHJpbmcoZGF0ZS5nZXRIb3VycygpKS5wYWRTdGFydCgyLCAnMCcpO1xuICBjb25zdCBtaW51dGVzID0gU3RyaW5nKGRhdGUuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCAnMCcpO1xuXG4gIHJldHVybiBgJHtkYXl9LiR7bW9udGh9LiR7eWVhcn0gJHtob3Vyc306JHttaW51dGVzfWA7XG59XG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidGlja2V0TGlzdCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRUaWNrZXRCdG4iLCJ0aWNrZXRNb2RhbCIsImRlbGV0ZU1vZGFsIiwiY2xvc2VCdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsInRpY2tldEZvcm0iLCJjb25maXJtRGVsZXRlQnRuIiwiY2FuY2VsRGVsZXRlQnRuIiwibG9hZGluZ0ljb24iLCJjdXJyZW50VGlja2V0SWQiLCJhcGlVcmwiLCJmZXRjaFRpY2tldHMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZW5kZXJUaWNrZXRzIiwidGlja2V0cyIsImlubmVySFRNTCIsInN0eWxlIiwiZGlzcGxheSIsImZvckVhY2giLCJ0aWNrZXQiLCJmb3JtYXR0ZWREYXRlIiwiZGF0ZSIsIkRhdGUiLCJjcmVhdGVkIiwiU3RyaW5nIiwiZ2V0RGF0ZSIsInBhZFN0YXJ0IiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInNsaWNlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwibGlzdEl0ZW0iLCJjcmVhdGVFbGVtZW50IiwiZGF0YXNldCIsImlkIiwic3RhdHVzIiwibmFtZSIsImNoZWNrYm94IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVkaXRCdG4iLCJpbm5lclRleHQiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwiZGVsZXRlQnRuIiwiYm9keVRpY2tldCIsInRpY2tldEVsZW1lbnQiLCJzaG93RGVzY3JpcHRpb25FbGVtZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJ0ZXh0Q29udGVudCIsImFkZCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiYXBwZW5kQ2hpbGQiLCJjbG9zZU1vZGFsIiwiYnV0dG9uIiwicmVzZXQiLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=