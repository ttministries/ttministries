var e=document.getElementById("popup-container"),t=document.getElementById("close-btn"),n=document.getElementById("contact-us-link-desktop"),s=document.getElementById("contact-us-link-mobile");function o(){e.style.display="block",e.classList.add("show"),sessionStorage.setItem("popupShown",!0)}sessionStorage.getItem("popupShown")?e.style.display="none":window.addEventListener("load",function(){setTimeout(function(){e.style.display="block",e.classList.add("show")},5e3)}),t.addEventListener("click",function(){e.classList.add("hide"),setTimeout(function(){e.style.display="none",e.classList.remove("hide","show")},500),sessionStorage.setItem("popupShown",!0)}),n.addEventListener("click",function(e){e.preventDefault(),o()}),s.addEventListener("click",function(e){e.preventDefault(),o()});
//# sourceMappingURL=index.a75157bd.js.map
