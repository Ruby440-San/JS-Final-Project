// Search Input Change JS
let userInput = document.getElementById('user-input')
let iconItems = document.getElementsByClassName('icon-item')
userInput.onfocus = function () {
  for (let items of iconItems) {
    items.style.display = 'none'
  }
  userInput.style.width = '100%'
}
userInput.onblur = function () {
  for (let items of iconItems) {
    items.style.display = 'block'
  }
  userInput.style.width = '65px'
}
// Navabr Bg JS
let nav = document.getElementById('nav')
window.onscroll = function () {
  if (window.pageYOffset > 300) {
    nav.classList.add('bg')
  } else {
    nav.classList.remove('bg')
  }
}
// Navbar Show & Hide JS
let humbarger = document.getElementById('humbarger')
let navMenu = document.getElementById('navbar-menu')
humbarger.onclick = function () {
  navMenu.classList.toggle('active')

  if (this.innerHTML == '<i class="fas fa-bars"></i>') {
    this.innerHTML = '<i class="fa-solid fa-square-xmark"></i>'
  } else {
    this.innerHTML = '<i class="fas fa-bars"></i>'
  }
}
// Slider JS
let nextSlider = document.getElementById('next')
let prevSlider = document.getElementById('prev')
let sliderNo = 1
let sliders = document.getElementsByClassName('slider')
function next() {
  document.getElementById('slider' + sliderNo).classList.remove('active')
  sliderNo++
  if (sliderNo > sliders.length) {
    sliderNo = 1
  }
  document.getElementById('slider' + sliderNo).classList.add('active')
}
function prev() {
  document.getElementById('slider' + sliderNo).classList.remove('active')
  sliderNo--
  if (sliderNo < 1) {
    sliderNo = sliders.length
  }
  document.getElementById('slider' + sliderNo).classList.add('active')
}
nextSlider.onclick = next
prevSlider.onclick = prev

// setInterval(next, 3000)

// Popular Products JS
let allItems = document.getElementById('all-btn')
let clothes = document.getElementById('cloth-btn')
let watch = document.getElementById('watch-btn')
let bag = document.getElementById('bag-btn')

let allItemsVal = document.getElementsByClassName('active')
let clothesVal = document.getElementsByClassName('cloth')
let watchVal = document.getElementsByClassName('watch')
let bagVal = document.getElementsByClassName('bag')
allItems.onclick = function () {
  for (let watch_card of watchVal) {
    watch_card.style.display = 'block'
  }
  for (let bag_card of bagVal) {
    bag_card.style.display = 'block'
  }
  for (let cloth_card of clothesVal) {
    cloth_card.style.display = 'block'
  }
  this.classList.add('active')
  watch.classList.remove('active')
  bag.classList.remove('active')
  clothes.classList.remove('active')
}
clothes.onclick = function () {
  for (let watch_card of watchVal) {
    watch_card.style.display = 'none'
  }
  for (let bag_card of bagVal) {
    bag_card.style.display = 'none'
  }
  for (let cloth_card of clothesVal) {
    cloth_card.style.display = 'block'
  }
  this.classList.add('active')
  watch.classList.remove('active')
  bag.classList.remove('active')
  allItems.classList.remove('active')
}
watch.onclick = function () {
  for (let cloth_card of clothesVal) {
    cloth_card.style.display = 'none'
  }
  for (let bag_card of bagVal) {
    bag_card.style.display = 'none'
  }
  for (let watch_card of watchVal) {
    watch_card.style.display = 'block'
  }
  this.classList.add('active')
  clothes.classList.remove('active')
  bag.classList.remove('active')
  allItems.classList.remove('active')
}
bag.onclick = function () {
  for (let cloth_card of clothesVal) {
    cloth_card.style.display = 'none'
  }
  for (let watch_card of watchVal) {
    watch_card.style.display = 'none'
  }
  for (let bag_card of bagVal) {
    bag_card.style.display = 'block'
  }
  this.classList.add('active')
  watch.classList.remove('active')
  clothes.classList.remove('active')
  allItems.classList.remove('active')
}
