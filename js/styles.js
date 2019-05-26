$('.content > .code-game-3D > .tag > a').ready(function() {        
    $('.content > .code-game-3D > .tag > a').removeClass('active'); 
    $(this).addClass('active');          
});

var modal = document.getElementById('signup-id-reference'); 

window.onclick = function(event) { 

    if (event.target == modal) { 

        modal.style.display = 'none'; 
    } 
}

let hideModal = () => {
    document.getElementById('signup-id-reference').style.display='none';
}

let = showSignup = () => {
    document.getElementById('signup-id-reference').style.display='block';
}