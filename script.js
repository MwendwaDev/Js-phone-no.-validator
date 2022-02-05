let check = document.querySelector(".check");

let number = document.querySelector(".number");

let text = document.querySelector(".text")
;

    let regex = /^\+?\d{0,3}\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{3}?/;

check.addEventListener("click",()=> {
    if(number.value =="") {
        text.innerText = "kindly key in your phone number";
        text.style.color = "blue";
    }

else if(number.value.match(regex)){
    text.innerText = "valid phone number";
    text.style.color = "green";
}

else {
    text.innerText = "invalid phone number";
    text.style.color = "red";
}

});


