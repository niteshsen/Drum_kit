for(let i=0; i < document.querySelectorAll(".drum").length; i++){
document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
        innerHTML = this.innerHTML
        setfunction(innerHTML)
        drumkit(innerHTML)
    })
 
}








function drumkit(key){
    switch (key){
       
           case "w": 
           var audio = new Audio("sound/tom1.mp3")
           audio.play()
           break;
           case "a": 
           var audio = new Audio("sound/tom2.mp3")
           audio.play()
           break;
           case "s": 
           var audio = new Audio("sound/tom3.mp3")
           audio.play()
           break;
           case "d": 
           var audio = new Audio("sound/tom4.mp3")
           audio.play()
           break;
           case "j": 
           var audio = new Audio("sound/snare.mp3")
           audio.play()
           break;
           case "k": 
           var audio = new Audio("sound/tom6.mp3")
           audio.play()
           break;
           case "l": 
           var audio = new Audio("sound/tom7.mp3")
           audio.play()
         
    }

}
function setfunction (key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed")
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100)
    
}