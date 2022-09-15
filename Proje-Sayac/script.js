let lower = document.querySelector(".lower");
let add =  document.querySelector(".add");
let zero = document.querySelector(".zero");
let number =  document.querySelector(".number");

let count=0;
number.innerText = count;


const arttırım = (() => {
   count++;
   number.innerText = count;
   return count;
});


const azaltma = (() => {
    count--;
    number.innerText = count;
    return count;
})


const sıfırla = (() => {
    count=0;
    number.innerText = count;
    return count;
})


add.addEventListener("click", () =>{
    arttırım();
    if(count < 0 ){
        number.style.color = "red";
    }
    else if(count > 0){
        number.style.color = "green";
    
    } 
    else{
        number.style.color = "black";

    }
})


lower.addEventListener("click", () => {
    azaltma();
    if(count < 0 ){
        number.style.color = "red";
    }
    else if(count > 0){
        number.style.color = "green";
    
    } 
    else{
        number.style.color = "black";

    }
})

zero.addEventListener("click", () => {
    sıfırla();
    if(count < 0 ){
        number.style.color = "red";
    }
    else if(count > 0){
        number.style.color = "green";
    
    } 
    else{
        number.style.color = "black";

    }
})


