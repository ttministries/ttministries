// // document.addEventListener('DOMContentLoaded', function() {
// //   var form = document.getElementById('mG61Hd');  // Replace 'your-form-id'
// //   with
// //                                                  // the actual ID of your
// //                                                  form
// //   form.addEventListener('submit', function(event) {
// //     event.preventDefault();  // Prevent default form submission
// //     validateForm();          // Call your validation function
// //   });
// // });
// function validateName() {
//   var name = document.getElementById('name').value;
//   if (name.length == 0) {
//     alert('Name can\'t be blank');
//     return false;
//   }
//   if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
//     alert('Please enter your correct name');  // Validation Message
//     return false;
//   }
//   return true;
// }
// function validatePhone() {
//   var phone = document.getElementById('phone').value;
//   if (phone.length == 0) {
//     alert('Phone number can\'t be blank');  // Validation Message
//     return false;
//   }
//   if (!phone.match(/^[0]?[789]\d{9}$/)) {
//     alert('Please enter a correct phone number');  // Validation Message
//     return false;
//   }
//   return true;
// }
// function validateEmail() {
//   var email = document.getElementById('email').value;
//   if (email.length == 0) {
//     alert('Email can\'t be blank');  // Validation Message
//     return false;
//   }
//   if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
//     alert('Please enter a correct email address');  // Validation Message
//     return false;
//   }
//   return true;
// }
// function validateForm() {
//   if (!validateName() || !validatePhone() || !validateEmail()) {
//     alert('Form not submitted');  // Validation Message
//     return false;
//   } else {
//     // form.submit();  // Submit the form
//     submitted = true;
//     console.log('submitted');
//     // Display thank you message
//     document.getElementById('thankyou-message').style.display = 'block';
//     // // Change the ID and text of the button
//     // var submitButton = document.getElementById('submit-btn');
//     // submitButton.id = 'close-btn';  // Change to the desired new ID
//     // submitButton.textContent = 'CLOSE';
//     // Hide the form
//     document.getElementById('subb').style.display = 'none';
//     // Disable the form inputs
//     document.getElementById('name').disabled = true;
//     document.getElementById('phone').disabled = true;
//     document.getElementById('email').disabled = true;
//     return true;
//   }
// }
// document.addEventListener('DOMContentLoaded', function() {
//   var hiddenIframe = document.getElementById('hidden_iframe');
//   if (!hiddenIframe) {
//     console.error('Hidden iframe element not found.');
//     return;
//   }
//   hiddenIframe.onload = function() {
//     try {
//       if (submitted) {
//         document.getElementById('thankyou-message').style.display = 'block';
//         document.getElementById('subb').style.display = 'none';
//       }
//     } catch (e) {
//       console.error('Error in iframe load event:', e);
//     }
//   };
// });
// function onSubmit() {
//   document.getElementById('form').style.display = 'none';
//   document.getElementById('thankyou-message').style.display = 'block';
// }
// var popupContainer = document.getElementById('popup-container');
// var closeBtn = document.getElementById('close-btn');
// var contactUsLinkDesktop =
// document.getElementById('contact-us-link-desktop'); var contactUsLinkMobile =
// document.getElementById('contact-us-link-mobile');
// // Check if popup has already been shown
// if (!sessionStorage.getItem('popupShown')) {
//   // Show popup if it hasn't been shown
//   window.addEventListener('load', function() {
//     setTimeout(function() {
//       popupContainer.style.display = 'block';
//       popupContainer.classList.add('show');
//     }, 5000);  // 5000 milliseconds = 5 seconds
//   });
// } else {
//   // Hide popup if it has already been shown
//   popupContainer.style.display = 'none';
// }
// // Add event listener to close button
// closeBtn.addEventListener('click', function() {
//   popupContainer.classList.add('hide');
//   setTimeout(function() {
//     popupContainer.style.display = 'none';
//     popupContainer.classList.remove('hide', 'show');
//   }, 500);  // Wait for animation to finish before removing popup from DOM
//   // Set popupShown flag in session storage
//   sessionStorage.setItem('popupShown', true);
// });
// // Function to show popup
// function showPopup() {
//   popupContainer.style.display = 'block';
//   popupContainer.classList.add('show');
//   // Set popupShown flag in session storage
//   sessionStorage.setItem('popupShown', true);
// }
// // Add event listeners to contact us links
// contactUsLinkDesktop.addEventListener('click', function(event) {
//   event.preventDefault();  // Prevent default link behavior
//   showPopup();             // Call showPopup function
// });
// contactUsLinkMobile.addEventListener('click', function(event) {
//   event.preventDefault();  // Prevent default link behavior
//   showPopup();             // Call showPopup function
// });
// console.log('JavaScript file is loaded.');
// working
// jas made
function validateName() {
    var name = document.getElementById("name").value;
    if (name.length == 0) {
        alert("Name can't be blank");
        return false;
    }
    if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
        alert("Please enter your correct name"); // Validation Message
        return false;
    }
    return true;
}
function validatePhone() {
    var phone = document.getElementById("phone").value;
    // Check if phone number field is not empty
    if (phone.length > 0) {
        if (!phone.match(/^[0]?[789]\d{9}$/)) {
            alert("Please enter a correct phone number"); // Validation Message
            return false;
        }
    }
    return true; // Return true for optional field or valid input
}
// function validatePhone() {
//   var phone = document.getElementById('phone').value;
//   if (phone.length == 0) {
//     alert('Phone number can\'t be blank');  // Validation Message
//     return false;
//   }
//   if (!phone.match(/^[0]?[789]\d{9}$/)) {
//     alert('Please enter a correct phone number');  // Validation Message
//     return false;
//   }
//   return true;
// }
function validateEmail() {
    var email = document.getElementById("email").value;
    if (email.length == 0) {
        alert("Email can't be blank"); // Validation Message
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        alert("Please enter a correct email address"); // Validation Message
        return false;
    }
    return true;
}
function validateForm() {
    // console.log(enteredvalidateform);
    if (!validateName() || !validatePhone() || !validateEmail()) {
        alert("Form not submitted"); // Validation Message
        return false;
    } else {
        submitted = true;
        console.log("submitted");
        // // Display thank you message
        document.getElementById("thankyou-message").style.display = "block";
        // // // Change the ID and text of the button
        // // var submitButton = document.getElementById('submit-btn');
        // // submitButton.id = 'close-btn';  // Change to the desired new ID
        // // submitButton.textContent = 'CLOSE';
        // // Hide the form
        document.getElementById("subb").style.display = "none";
        // // Disable the form inputs
        document.getElementById("namee").style.display = "none";
        document.getElementById("phonee").style.display = "none";
        document.getElementById("emaill").style.display = "none";
        document.getElementById("submittt").style.display = "none";
        // document.getElementById('clse').style.display = 'block';
        return true;
    }
}
function onSubmit() {
    document.getElementById("form").style.display = "none";
    document.getElementById("thankyou-message").style.display = "block";
}
var popupContainer = document.getElementById("popup-container");
var closeBtn = document.getElementById("close-btn");
var contactUsLinkDesktop = document.getElementById("contact-us-link-desktop");
var contactUsLinkMobile = document.getElementById("contact-us-link-mobile");
// Check if popup has already been shown
if (!sessionStorage.getItem("popupShown")) // Show popup if it hasn't been shown
window.addEventListener("load", function() {
    setTimeout(function() {
        popupContainer.style.display = "block";
        popupContainer.classList.add("show");
    }, 5000); // 5000 milliseconds = 5 seconds
});
else // Hide popup if it has already been shown
popupContainer.style.display = "none";
// Add event listener to close button
closeBtn.addEventListener("click", function() {
    popupContainer.classList.add("hide");
    setTimeout(function() {
        popupContainer.style.display = "none";
        popupContainer.classList.remove("hide", "show");
    }, 500); // Wait for animation to finish before removing popup from DOM
    // Set popupShown flag in session storage
    sessionStorage.setItem("popupShown", true);
});
// Function to show popup
function showPopup() {
    popupContainer.style.display = "block";
    popupContainer.classList.add("show");
    // Set popupShown flag in session storage
    sessionStorage.setItem("popupShown", true);
}
// Add event listeners to contact us links
contactUsLinkDesktop.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    showPopup(); // Call showPopup function
});
contactUsLinkMobile.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    showPopup(); // Call showPopup function
});

//# sourceMappingURL=index.ae8e8aa8.js.map
