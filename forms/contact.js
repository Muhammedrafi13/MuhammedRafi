
function resultName() {
    var name = document.myForm.name.value;
    var nameTm = null;
    nameTm = name.trim();
    var expName = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+[A-Za-z]*$/;
    document.myForm.name.value = nameTm;
    if (nameTm == "" || name == null || !isNaN(nameTm[0]) || nameTm.match(expName)) {
        document.getElementById("name").innerHTML = "enter a valid name";
        document.myForm.name.focus();
        return false;
    } else {
        document.getElementById("name").innerHTML = "";
        return true;
    }
}
function resultEmail() {
    var email = document.myForm.email.value;
    var expEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var emailCheck = expEmail.test(email);
    if (emailCheck) {
        document.getElementById("email").innerHTML = "";
        return true;
    } else {
        document.getElementById("email").innerHTML = "enter a valid email";
        document.myForm.email.focus();
        return false;
    }
}

function resultSubject() {
    var subject = document.myForm.subject.value;
    var subTm = null;
    subTm = subject.trim();
    var expSub = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+[A-Za-z]*$/;
    document.myForm.subject.value = subTm;
    if (subTm == "" || subject == null || !isNaN(subTm[0]) || subTm.match(expSub)) {
        document.getElementById("subject").innerHTML = "enter a valid subject";
        document.myForm.subject.focus();
        return false;
    } else {
        document.getElementById("subject").innerHTML = "";
        return true;
    }
}

function resultMessage(){
    var message = document.myForm.message.value;
    var msgTm=null;
    msgTm=message.trim();
    document.myForm.message.value=msgTm;
    var msglength=message.length;
    if(msgTm =="" || message ==null || msglength<=20){
        document.getElementById("message").innerHTML = "enter a valid message";
        document.myForm.message.focus();
        return false;
    }else{
        document.getElementById("message").innerHTML = "";
        return true;
    }
}

