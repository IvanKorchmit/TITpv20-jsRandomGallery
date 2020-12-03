const image = document.querySelector("#image");
const button = document.querySelector(".btn");

let images = ["filosofem", "tar", "thule", "daudi", "burz"];


button.addEventListener('click', (event)=> {
    console.log("Hello world");
    let rand = Math.floor(Math.random()*images.length);
    let address = `img/${images[rand]}.jpg`;
    console.log(address)
    image.src = address;
    event.preventDefault();

});
