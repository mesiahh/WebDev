function subButt (pressSub) {
    const button = document.querySelector ('.' + pressSub);

    if (button.innerHTML === 'Subscribe') {
        button.innerHTML = 'Subscribed!';
        button.style = "background-color: grey;"
    } else {
        button.innerHTML = 'Subscribe';
        button.style = "background-color: red;"
    }
}

function toggleNotifBar() {
    var notifBar = document.querySelector('.notif-bar');
    if (notifBar.style.display === 'none' || notifBar.style.display === '') {
        notifBar.style.display = 'block';
    } else {
        notifBar.style.display = 'none';
    }
}

function toggleMenuBar() {
    var menuBar = document.querySelector('.menu-bar');
    if (menuBar.style.display === 'none' || menuBar.style.display === '') {
        menuBar.style.display = 'block';
    } else {
        menuBar.style.display = 'none';
    }
}