document.addEventListener("DOMContentLoaded",function(){document.getElementById("your-form-id").addEventListener("submit",function(e){var t,n,o;e.preventDefault(),(0==(t=document.getElementById("name").value).length?(alert("Name can't be blank"),1):!t.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)&&(alert("Please enter your correct name"),1))||(0==(n=document.getElementById("phone").value).length?(alert("Phone number can't be blank"),1):!n.match(/^[0]?[789]\d{9}$/)&&(alert("Please enter a correct phone number"),1))||(0==(o=document.getElementById("email").value).length?(alert("Email can't be blank"),1):!o.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)&&(alert("Please enter a correct email address"),1))?alert("Form not submitted"):(submitted=!0,console.log("submitted"),document.getElementById("thankyou-message").style.display="block",document.getElementById("subb").style.display="none",document.getElementById("name").disabled=!0,document.getElementById("phone").disabled=!0,document.getElementById("email").disabled=!0)})}),document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("hidden_iframe");if(!e){console.error("Hidden iframe element not found.");return}e.onload=function(){try{submitted&&(document.getElementById("thankyou-message").style.display="block",document.getElementById("subb").style.display="none")}catch(e){console.error("Error in iframe load event:",e)}}});var e=document.getElementById("popup-container"),t=document.getElementById("close-btn"),n=document.getElementById("contact-us-link-desktop"),o=document.getElementById("contact-us-link-mobile");function d(){e.style.display="block",e.classList.add("show"),sessionStorage.setItem("popupShown",!0)}sessionStorage.getItem("popupShown")?e.style.display="none":window.addEventListener("load",function(){setTimeout(function(){e.style.display="block",e.classList.add("show")},5e3)}),t.addEventListener("click",function(){e.classList.add("hide"),setTimeout(function(){e.style.display="none",e.classList.remove("hide","show")},500),sessionStorage.setItem("popupShown",!0)}),n.addEventListener("click",function(e){e.preventDefault(),d()}),o.addEventListener("click",function(e){e.preventDefault(),d()}),console.log("JavaScript file is loaded.");
//# sourceMappingURL=index.d0ad0846.js.map
