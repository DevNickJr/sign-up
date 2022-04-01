

// function validation() {
//     let form = document.forms[0];
//     let pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     let email = document.getElementById('email').value;
//     for (let i=0; i<form.length-1; i++) {
//         if (form[i].value.trim() == '') {
//             alert(`${form[i].placeholder} cannot be empty`);
//             form[i].className = 'error'
//             alert(form[i].className)
//             return false
//         }
//     }

//     if (!pattern.test(email)) {
//         alert(pattern.test(email))
//         alert('Looks like this is not an email')
//         return false
//     }
// }


// function error() {
//     error = document.getElementsByClassName('error');

// }




function validation() {
    let form = document.forms[0];
    let pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let email = document.getElementById('email').value;
    let check= true;
    if (form[0].value.trim() == '') {
        alert(`${form[0].placeholder} cannot be empty`);
        form[0].className = 'error';            
        alert(form[0].className);
        check = false;
        }
    if (form[1].value.trim() == '') {
        alert(`${form[1].placeholder} cannot be empty`);
        form[1].className = 'error';            
        alert(form[1].className);
        check = false;
        }
    if (form[2].value.trim() == '') {
        alert(`${form[2].placeholder} cannot be empty`);
        form[2].className = 'error';            
        alert(form[2].className);
        check = false;
        } else if (!pattern.test(email)) {
            alert(pattern.test(email));
            alert('Looks like this is not an email');
            form[2].className = 'error';  
            check=  false;
        }

    if (form[3].value.trim() == '') {
        alert(`${form[3].placeholder} cannot be empty`);
        form[3].className = 'error';            
        alert(form[3].className);
        check = false;
        }    
    return check
}


// var inputFocusEvent = document.getElementsByTagName('input');
// for (var i of inputFocusEvent) {
//     i.addEventListener('focus', focus() {
//         alert('red');
//     }, false);
// }

// document.getElementById('fname').addEventListener('focus', focus() {
//     alert('green')
// })