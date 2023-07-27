
function validation(){

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    
    var dob = document.getElementById('dob').value;
    var gender = document.getElementById('gender').value;
    var city = document.getElementById('city').value;
    var country = document.getElementById('country').value;
    var hQualification = document.getElementById('qualification').value;
    var workExp = document.getElementById('wExperience').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var emailId = document.getElementById('email').value;
    var payment = document.getElementById('payment').value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!emailRegex.test(emailId)){
        document.getElementById('emailError').innerHTML = "** its Invalid email-ID"
        return false;
    }

    var data = 
            "Please Check Information are correct or not :\n" +
            `First name: ${fname}\n` +
            `Last name : ${lname}\n` +
            `Date of Birth : ${dob}\n` +
            `Gender : ${gender}\n` +
            `City : ${city}\n`+
            `Highest Qualification : ${hQualification}\n`+
            `Work Experience(years) : ${workExp}\n`+
            `Phone Number : ${phoneNumber}\n`+
            `Email ID : ${emailId}\n`+
            `Want To Pay in EMI : ${payment}\n`;

    if(confirm(data)==true){
        return true;
    }
    else{
        return false;
    }

}

function lettersOnly(data){
    var char = /[^a-zA-Z]*$/;
    data.value = data.value.replace(char, "");
}

function phoneNumbersOnly(){

    phoneNumber.value = phoneNumber.value.substring(0,10);
    for(let i=0; i<10; i++){
        var char = /[^0-9]/gi;
    phoneNumber.value = phoneNumber.value.replace(char, "");
    }
    
}

function workNumbersOnly(){
    
    wExperience.value = wExperience.value.substring(0,2);
    for(let i=0; i<3; i++){
        var char = /[^0-9]/gi;
        wExperience.value = wExperience.value.replace(char, "");
    }
}

function emailValidation(){
    var emailCheck = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(emailRegex.test(emailCheck)){
        // document.getElementById('emailError').innerHTML = "** its valid email"
        return true;
    }
    else{
        document.getElementById('emailError').innerHTML = "** its Invalid email-ID"
        return false;
    }  
}

