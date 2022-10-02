const body = document.querySelector("body");

var displayImage = (value) => {
    switch(value) {
        case 1:
            body.style.backgroundImage = "url('/img/nav/use-our-tracker.webp')";
            break;

        case 2:
            body.style.backgroundImage = "url('/img/nav/about-tracker.webp')";
            break;

        case 3:
            body.style.backgroundImage = "url('/img/nav/about-iss.jpg')";
            break;

        case 4:
            body.style.backgroundImage = "url('/img/nav/about-developer.jpg')";
            break;

        case 5:
            body.style.backgroundImage = "url('/img/nav/credits.jpg')";
            break;
            
        default:
            body.style.backgroundImage = "url('/img/general/mainpage_background.jpg')";
            break;
    }
}

var displayDefault = () => {
    body.style.backgroundImage = "url('/img/general/mainpage_background.jpg')";
}