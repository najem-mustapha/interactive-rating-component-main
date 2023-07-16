
const ratingNumber=document.querySelector(".rating-number");
const number=document.querySelector(".rating-number h2")


function clrChange(){
    if(ratingNumber.classList.contains("rating-number")){
    
    ratingNumber.style.backgroundColor='orange';
    number.style.color='white';
    }else{
    ratingNumber.classList.toggle("rating-number");
    }
}
ratingNumber.addEventListener("click",clrChange);