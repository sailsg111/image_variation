console.log('Hello!')
let imgs = document.getElementsByTagName("img");

// let imagelink = 'images/cat1.jpg';
function changeColorVariation() {
    for (img of imgs) {
        console.log(img.src)

        // let file = imagelink
        // let url = chrome.extension.getURL(file)
        // img.src = url
        // img.style.opacity = 0.5;
        // img.style.filter = 'alpha(opacity=90)';
        img.style.filter = 'contrast(80%) grayscale(80%) opacity(90%) saturate(18%)';
        // console.log(url)

    }
}
setInterval(changeColorVariation, 500)
setTimeout(changeColorVariation, 3000)
// changeColorVariation()
// for (img of imgs) {
//     console.log(img.src)

//     // let file = imagelink
//     // let url = chrome.extension.getURL(file)
//     // img.src = url
//     // img.style.opacity = 0.5;
//     // img.style.filter = 'alpha(opacity=90)';
//     img.style.filter = 'contrast(80%) grayscale(80%) opacity(90%) saturate(18%)';
//     // console.log(url)

// }