$(function() {
    var $contactForm=$('#contactForm');
    $contactForm.validate({
        rules:{
            name:{
              required:true,
              minlength:4 
             
            },  
            district:{
                required:true,
                minlength:6


            },
            countryCode:{
                required:true
            },
            phoneNumber:{
                required:true,
                minlength:10
            },
            class:{
                required:true
            },
            inputEmail:{
                required:true
            }



        },
        messages:{
            name:{
                required:'Please enter your name',
                minlength:'Please enter a valid name'
            },
            district:{
                required:'Please enter your district',
                minlength:'Please enter a valid district name'

            },
            countryCode:{
                required:'Please enter your country code'
            },
            phoneNumber:{
                required:'Please enter your mobile number',
                minlength:'Please enter a valid mobile number'
           },
            class:{
                required:'Please enter your classs'
            },
            inputEmail:{
                required:'Please enter valid email'
            }



        }

    })
})

const form = document.querySelector("#contactForm")
   const submitButton = document.querySelector("#submit")
   const scriptURL = 'https://script.google.com/macros/s/AKfycbxNUidRx_NY4w39gucsTG1Uo-z22JSbvsOr-FTMNEG9Ga1mHFVAhBw0JqeCkYw920FbyQ/exec'

   form.addEventListener('submit', e => {
     submitButton.disabled = true
     e.preventDefault()
     let requestBody = new FormData(form)
     fetch(scriptURL, { method: 'POST', body: requestBody})
       .then(response => {
          alert('Success!', response)
          submitButton.disabled = false
         })
       .catch(error => {
       alert('Error!', error.message)
         submitButton.disabled = false

       }
       )
   })