const mainSwiper = new Swiper(".city-swiper", {
    slidesPerView: 1,
    touchReleaseOnEdges : true,
})

const seoulSwiper = new Swiper(".seoul-swiper", {
    slidesPerView: 7.1,
    spaceBetween: 20,
    touchReleaseOnEdges : true,
    nested: true,

})
const incheonSwiper = new Swiper(".incheon-swiper", {
    slidesPerView: 7.1,
    spaceBetween: 20,
    touchReleaseOnEdges : true,
    nested: true,
})

var seoulname = document.querySelector(".city-slide1 > .temperature > .city-contents > h2");
console.log(seoulname);
seoulname.innerText = `${weatherDB[0].city}`;   

var seoultemp = document.querySelector(".city-slide1 > .temperature > .city-contents > h1");
console.log(seoultemp);
seoultemp.innerText = `${weatherDB[0].temp}`;

let incheonname = document.querySelector(".city-slide2 > .temperature > .city-contents > h2");
console.log(incheonname);
incheonname.innerText = `${weatherDB[1].city}`;

let incheontemp = document.querySelector(".city-slide2 > .temperature > .city-contents > h1");
console.log(incheontemp);
incheontemp.innerText = `${weatherDB[1].temp}`;