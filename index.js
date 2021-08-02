let position = 0;

function previousImage() {
    const slider2 = document.getElementById('slider2');
    if ( position < 0 ) {
        position += 500;
    }
    slider2.style.transform = `translateX(${position}px)`;
}

function nextImage() {
    const slider2 = document.getElementById('slider2');
    if ( position > -2000)
        position -= 500;
    
    slider2.style.transform = `translateX(${position}px)`;
}