console.log('Hello!')
let imgs = document.getElementsByTagName("img");

// let imagelink = 'images/cat1.jpg';

for (img of imgs) {
    console.log(img.src)

    // let file = imagelink
    // let url = chrome.extension.getURL(file)
    // img.src = url
    // img.style.opacity = 0.5;
    // img.style.filter = 'alpha(opacity=90)';
    img.style.filter = 'contrast(50%) grayscale(20%) opacity(80%) saturate(100%)';
    // console.log(url)

}