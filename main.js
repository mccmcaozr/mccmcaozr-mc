(function(){
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.12,rootMargin:"0px 0px -8% 0px"});
document.querySelectorAll(".q-card,.step,.reveal").forEach((el,i)=>{el.style.transitionDelay=(i%6)*.04+"s";io.observe(el)});
const t=document.getElementById("toast"),b=document.getElementById("copy-qq"),q=document.getElementById("qq");
b.onclick=async()=>{const x=q.textContent.trim();try{await navigator.clipboard.writeText(x)}catch{const a=document.createElement("textarea");a.value=x;document.body.appendChild(a);a.select();document.execCommand("copy");a.remove()}t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1600)};
})();
