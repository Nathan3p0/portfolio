function toggleMenu() {
    $('#js-navbar__toggle').on('click', function(){
        $('#js-nav').toggleClass('active');
    })
}
function closeMenuOnClick() {
    let menuLinkActive = document.getElementById('js-nav');
    $('#js-nav li').on('click', function (e) {
        if(menuLinkActive.classList.contains('active')){
            $('#js-nav').toggleClass('active');
        } 
    })
}

function functionHandler() {
    toggleMenu();
    closeMenuOnClick();
}

window.onload = functionHandler();