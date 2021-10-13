let saintP = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d511634.70987306157!2d29.534285715386545!3d59.93922589518761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINCg0L7RgdGB0LjRjw!5e0!3m2!1sru!2sil!4v1634122268483!5m2!1sru!2sil";
let eilat = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221963.87592059863!2d34.81398050382342!3d29.627353358595958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150071e324795e0b%3A0xfe1d95f85577f6db!2z0K3QudC70LDRgg!5e0!3m2!1sru!2sil!4v1634123794129!5m2!1sru!2sil";
let jerusalem = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108513.70308822051!2d35.10531865599252!3d31.796299428569416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2z0JjQtdGA0YPRgdCw0LvQuNC8!5e0!3m2!1sru!2sil!4v1634125436691!5m2!1sru!2sil";
let telaviv = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108169.91309720256!2d34.727205664150475!3d32.087912232664166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2z0KLQtdC70Ywt0JDQstC40LI!5e0!3m2!1sru!2sil!4v1634123938688!5m2!1sru!2sil";

let arrayOfMaps = [saintP, eilat, jerusalem, telaviv];
let iframe = document.getElementById('iframe');
let prevButton = document.getElementById('prev-button');
let nextButton = document.getElementById('next-button');
prevButton.setAttribute('disabled', true);
let i = 0;
function clickedNext() {
    i++;
    prevButton.removeAttribute('disabled');
    if (i == 3) {
        nextButton.setAttribute('disabled', true);
    }
    iframe.setAttribute('src', arrayOfMaps[i]);
}
function clickedPrev() {
    i--;
    if (i == 0) {
        prevButton.setAttribute('disabled', true);
    } else if (i < 3) {
        nextButton.removeAttribute('disabled');
    }
    iframe.setAttribute('src', arrayOfMaps[i]);
}
nextButton.addEventListener('click', clickedNext);
prevButton.addEventListener('click', clickedPrev);
