const images = document.querySelectorAll('img');

// OPTIONS TO AFFECT IMAGE
const options = {
    threshold: [.1]
}

function preloadImage(img) {
    const source = img.getAttribute('data-src');

    img.src = source;
}

const io = new IntersectionObserver(
    (entries, io) =>{

        entries.forEach(entry => {
            // console.log(entries);
            if(!entry.isIntersecting){
                return;
            } else{
                //Call a function on th eimage it is currently seeing
                preloadImage(entry.target)
                io.unobserve(entry.target) // Stop observing it
            }
        })
    },
    options
)

//SEE ALL IMAGES
images.forEach(image => {
    io.observe(image);
})
