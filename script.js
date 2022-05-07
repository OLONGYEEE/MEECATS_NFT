const photoWrap = document.querySelector("div.photo");
const photos =photoWrap.querySelectorAll("img")


photoWrap.addEventListener("mouseover",function(){


    photos.forEach(photo => {
    let randomX = Math.round(Math.random()*7)*20 - 40;
    let randomY = Math.round(Math.random()*7)*20 - 40;
    

photo.style.transform = `translate(${randomX}px,${randomY}px)`

    })

})

    photoWrap.addEventListener("mouseout",function(){


   photos.forEach(photo =>{

    photo.style.transform = `translate(0px,0px)`
   })

})



const menuTag = document.querySelector("nav a.toggle-menu")
const asideTag = document.querySelector("aside")
const wrapTag = document.querySelector("div.wrap")

menuTag. addEventListener("click",function(){

asideTag.classList.toggle("open")
wrapTag.classList.toggle("open")


})


