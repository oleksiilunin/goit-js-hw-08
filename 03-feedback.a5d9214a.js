const e=document.querySelector(".feedback-form");let t={};console.log(e),e.addEventListener("input",(function(e){const{email:a,message:n}=e.currentTarget.elements;t={email:a.value,message:n.value},localStorage.setItem("feedback-form-state",JSON.stringify(t))})),e.addEventListener("submit",(function(e){e.preventDefault(),console.log(t),e.currentTarget.reset()})),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e){const{email:t,message:a}=e,n=document.querySelector('[name ="email"]'),o=document.querySelector('[name ="message"]');n.value=t,o.value=a}}();
//# sourceMappingURL=03-feedback.a5d9214a.js.map
