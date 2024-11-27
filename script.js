function hamburg(){
    const navbar = document.querySelector("dropdown")
    navbar.style.transform="translateY(0px)"
}
const texts=[
    "Developer",
    "Designer",
    "Art Artist"
]
let speed =100;
const textElements=document.querySelector(".typewriter-text")
let textIndex = 0;
let characterIndex=0;
function typewriter(){
    if(characterIndex<texts[textIndex].length){
        textElements.innerHTML+=texts[textIndex].charAt(characterIndex)
        characterIndex++
        setTimeout(typewriter,speed);
    }else{
        setTimeout(eraseText,1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length>0){
        textElements.innerHTML=textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText,50)
    }else{
        textIndex=(textIndex +1) % texts.length;
        characterIndex=0;
        setTimeout(typewriter,500)
    }
}
window.onload=typewriter