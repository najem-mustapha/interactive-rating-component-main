const ratingNumber=document.querySelector(".rating-number");


function clickNumber(){
    if(ratingNumber.classList.contains("numberClick")){
    
    ratingNumber.classList.remove("numberClick");
    }else{
    ratingNumber.classList.add("numberClick")
    }
}
ratingNumber.addEventListener("click",clickNumber);