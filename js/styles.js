//Function to keep coding/gaming/3D links have a red border while active.
$('.content > .code-game-3D > .tag > a').ready(function() {        
    $('.content > .code-game-3D > .tag > a').removeClass('active'); 
    $(this).addClass('active');          
});

//Function to hide the signup form when outer screen is clicked.

let modal = document.getElementById('signup-id-reference'); 

window.onclick = function(event) { 

    if (event.target == modal) { 

        modal.style.display = 'none'; 
    } 
}

//Functions to show and hide the register form

let hideModal = () => {
    document.getElementById('signup-id-reference').style.display='none';
}

let = showSignup = () => {
    document.getElementById('signup-id-reference').style.display='block';
}