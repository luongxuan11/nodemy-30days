let getClose = document.querySelectorAll('.close')
let getModel = document.querySelector('.model')
console.log(getClose)
getClose.forEach((item) =>
{
    
    item.onclick = () =>
    {
        console.log(123)
        getModel.classList.toggle('hide')
    }
})