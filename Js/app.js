

console.log('its working!!')
const hamburger = document.querySelector('.hamburger')
const exit = document.querySelector('#exit')
const menu = document.querySelector('.mobile-container')
const basket = document.querySelector('.basket')
const closeCart = document.querySelector('.close-cart')
const shoppingCart = document.querySelector('.shopping-cart')
const favouritesBtn = document.querySelector('.favouritesBtn')
const favouriteList = document.querySelector('.favourite-list')
const closeFav = document.querySelector('.close-fav')
let addFav = document.querySelectorAll('.addFav')
let addToCart = document.querySelectorAll('.add')
const favouritesUL = document.getElementById('favourites')
const cartUL = document.getElementById('cart')



hamburger.addEventListener('click', function() {
    menu.classList.add('show')
    gsap.from('.menu-list', {opacity: 0, duration: 5, x: -100})
})

exit.addEventListener('click', function() {
    menu.classList.remove('show')
})

addFav.forEach(function(i) {
    i.addEventListener('click', function(){
        i.classList.toggle('show')


        if (i.classList.contains("show") == true){
            const fav = document.createElement('div')
            fav.classList.add('fav')
            
            let desc = document.querySelectorAll('#desc')
           
            
            let price = document.querySelectorAll('#price')

           
            let favDesc = desc.innerText
            let favPrice = price.innerText
            fav.innerHTML = ` <img alt="">
            <h3 class="fav-desc">${favDesc}</h3>
            <p class="fav-price">${favPrice}</p>
            <button class="add">Add to bag</button>`
            favouritesUL.appendChild(fav)
        } else {
            // Removes all children - not what we want!!
            favouritesUL.removeChild(favouritesUL.lastChild)
        }

      
    })

   
})

addToCart.forEach(function(i) {
    i.addEventListener('click', function() {
        if (i.classList.contains("show") == false){
            i.classList.add('show')
            i.innerHTML = "Added!"
        }  else {
            i.classList.remove('show')
            i.innerHTML = "Add To Bag"
        }

        if(i.classList.contains("show") == true){
            const bag = document.createElement('div')
            bag.classList.add('fav')

            bag.innerHTML = ` <img alt="">
            <h3 class="fav-desc"></h3>
            <p class="fav-price"></p>
            <button class="add">Add to bag</button>`
            cartUL.appendChild(bag)
        } else {
            cartUL.removeChild(cartUL.lastChild)
        }
    })
})



basket.addEventListener('click',  function() {
      shoppingCart.classList.add('show')
})

closeCart.addEventListener('click', function() {
    shoppingCart.classList.remove('show')
})

favouritesBtn.addEventListener('click', function() {
    favouriteList.classList.add('show')
})

closeFav.addEventListener('click', function() {
    favouriteList.classList.remove('show')
})

