
// //STEP 1 target the data-src attribute
// const images = document.querySelectorAll("[data-src]")

// // Step 2 Preload the image.  THis function will pass an image through and set the image to the source (src)
// function preLoadImage(img) {
//     const src = img.getAttribute("data-src");

//     if(!src){
//         return;
//     }

//     img.src = src;
// }



// const imgOptions = {
//     threshold:0.5
// };

// const imgObserver = new IntersectionObserver((entries, imgObserver) => {

//         entries.forEach(entry => {
//             if(!entry.isIntersecting){
//                 return;
//             } else{
//                 preLoadImage(entry.target);
//                 imgObserver.unobserve(entry.target);
//             }
//         })

// }, imgOptions);

// images.forEach(image => {
//     imgObserver.observe(image);
// })

// SECOND EXAMPLE
let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
    // Change the data-src to the src
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        // Remove data-src
        image.removeAttribute('data-src')
    }
}

// // Load through each image
// imagesToLoad.forEach((img) => {
//     loadImages(img);
// })



// THRID EXAMPLE (WITH SECOND)

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            // IF THE USER"S WINDOW IS ON TH EIMAGE
            if(item.isIntersecting) {
                //LOAD IMAGE
                loadImages(item.target);
                //IF USER IS NOT ON IMAGE< DON"T SHOW IT
                observer.unobserve(item.target);
            }
        });
    });
    //LOAD EACH IMAGE
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}