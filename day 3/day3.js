let getImg = document.querySelectorAll('.image img')
let gallery = document.querySelector('.gallery')
let getClose = document.querySelector('.close')
let getGallery_inner = document.querySelector('.gallery_inner img')
let arrowRight = document.querySelector('.bxs-chevron-right')
let arrowLeft = document.querySelector('.bxs-chevron-left')
console.log(getClose)
let handel = () => {
    let currentIndex = 0

    getImg.forEach((item, index) => {
        item.onclick = () => {
            currentIndex = index
            getGallery_inner.src = getImg[currentIndex].src
            gallery.classList.add('show')
        }
    })
    let show = () => {
        getGallery_inner.src = getImg[currentIndex].src
            gallery.classList.add('show')
            if(currentIndex == 7){
                arrowRight.classList.add('hide')
            }else{
                arrowRight.classList.remove('hide')
            } 
            if(currentIndex == 0){
                arrowLeft.classList.add('hide')
            }else{
                arrowLeft.classList.remove('hide')
            }
    }
    getClose.onclick = () => {
        gallery.classList.toggle('show')
    }
    document.addEventListener('keydown', (e) => {
        if (e.keyCode === 27) {
            gallery.classList.remove('show')
        }
    })
    arrowRight.onclick = () => {
        if (currentIndex < 7) {
            currentIndex++
            show()
        }
    }
    arrowLeft.onclick = (e) =>
    {
        if(currentIndex > 0){
            currentIndex--
            show()
        }
        
    }
}

let start = () => {
    handel()
}


start()