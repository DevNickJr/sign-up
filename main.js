function validation() {
    let form = document.forms[0];
    let pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let email = document.getElementById('email').value;
    let check= true;
    if (form[0].value.trim() == '') {
        form[0].className = 'error';  
        document.getElementById('fname-p').innerHTML = `${form[0].placeholder} cannot be empty`;       
        check = false;
        }
    if (form[1].value.trim() == '') {
        form[1].className = 'error';
        document.getElementById('lname-p').innerHTML = `${form[1].placeholder} cannot be empty`;    
        check = false;
        }
    if (form[2].value.trim() == '') {
        form[2].className = 'error';   
        document.getElementById('email-p').innerHTML = `${form[2].placeholder} cannot be empty`;        
        check = false;
        } else if (!pattern.test(email)) {
            form[2].className = 'error';  
            document.getElementById('email-p').innerHTML = `Looks like this is not an email`;
            check=  false;
        } 

    if (form[3].value.trim() == '') {
        document.getElementById('pword-p').innerHTML = `${form[3].placeholder} cannot be empty`;  
        form[3].className = 'error';            
        check = false;
        }    
    return check
}


// var inputFocusEvent = document.getElementsByTagName('input');
// for (var i of inputFocusEvent) {
//     i.addEventListener('click', function() {        
//         i.className = 'error stop';
//         document.getElementsByClassName(`${i.className}`)[0].value= 'meeeeeeee'
//     }, false);
// }



//initial code
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



