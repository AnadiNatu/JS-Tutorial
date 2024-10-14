var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");




function validateName(){ // this functioon will start executing whenever we type anything in the name tag 

    var name = document.getElementById('contact-name').value; // this variable will store the value written in the input feild

    if(name.lenght == 0){
        nameError.innerHTML = 'Name is Required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write Full Name';
        return false;
    }

    nameError.innerHTML = `<i class="fas fa-check-circle"></i>`;
    return true;
}


function validatePhone(){
    var phone = document.getElementById('contact-phone').value; // this variable will store the value written in the input feild

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone Number Is Required';
        return false;
    }

    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone Number Should be 10 digits';
        return false;
    } 

    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only Digits Please';
        return true;
    }

    phoneError.innerHTML = `<i class="fas fa-check-circle"></i>`;
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value; // this variable will store the value written in the input feild
    
    if(email.length == 0){

        emailError.innerHTML = 'Email is required';
        return false;

    }

    if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email is Invalid';
        return false;
    }

    emailError.innerHTML = `<i class="fas fa-check-circle"></i>`;
    return true;
}

function validateMessage(){

    var message = document.getElementById('contact-message').value; // this variable will store the value written in the input feild

    var required = 30 ;

    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + 'more character required';
        return false;
    }


    messageError.innerHTML = `<i class="fas fa-check-circle"></i>`;
    return true;

}


function validateForm(){

    if(!validateName() || !validatePhone() || !validateEmail() || !!validateMessage()){
        
        submitError.style.display = 'block';

        submitError.innerHTML = 'Please fill the fields properly';

        setTimeout(function(){submitError.style.display = 'none';} , 3000); // this line will show the input field for 3 sec after which it will be blocked 

        return false;
    }



}