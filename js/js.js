var appButtonVideo = document.querySelector('.button-video');
var appButtonFeatures = document.querySelector('.button-features');
var appButtonView = document.querySelector('.button-view-pricing');
var appButtonRead = document.querySelector('.button-read-documentation');

appButtonVideo.onmouseover = function () {
    appButtonVideo.classList.add('button-app-active');
    appButtonVideo.style.backgroundColor = '#4C85FF';
    appButtonVideo.style.color = 'white';
}

appButtonVideo.onmouseout = function () {
    appButtonVideo.classList.remove('button-app-active');
    appButtonVideo.style.backgroundColor = '#F5F8FF';
    appButtonVideo.style.color = '#ADB4D2';
}

appButtonFeatures.onmouseover = function () {
    appButtonFeatures.classList.add('button-app-active');
    appButtonFeatures.style.backgroundColor = '#4C85FF';
    appButtonFeatures.style.color = 'white';
}

appButtonFeatures.onmouseout = function () {
    appButtonFeatures.classList.remove('button-app-active');
    appButtonFeatures.style.backgroundColor = '#F5F8FF';
    appButtonFeatures.style.color = '#ADB4D2';
}

appButtonView.onmouseover = function () {
    appButtonView.classList.add('button-get-started-active');
    appButtonView.classList.remove('button-get-started-disable');
    appButtonView.style.backgroundColor = '#FFFFFF';
    appButtonView.style.color = '#565F82';
}

appButtonView.onmouseout = function () {
    appButtonView.classList.remove('button-get-started-active');
    appButtonView.classList.add('button-get-started-disable');
    appButtonView.style.background = '#linear-gradient(229.32deg, #6888FF 12.77%, #5E80FF 73.11%)';
    appButtonView.style.color = '#C7D3FF';
}

appButtonRead.onmouseover = function () {
    appButtonRead.classList.add('button-get-started-active');
    appButtonRead.classList.remove('button-get-started-disable');
    appButtonRead.style.backgroundColor = '#FFFFFF';
    appButtonRead.style.color = '#565F82';
}

appButtonRead.onmouseout = function () {
    appButtonRead.classList.remove('button-get-started-active');
    appButtonRead.classList.add('button-get-started-disable');
    appButtonRead.style.background = '#linear-gradient(229.32deg, #6888FF 12.77%, #5E80FF 73.11%)';
    appButtonRead.style.color = '#C7D3FF';
}

