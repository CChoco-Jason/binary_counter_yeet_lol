const button = document.querySelector('.button');
const number = document.querySelectorAll('.number');
const input = document.querySelector('.textinptubruh');
console.log(button)
console.log(number)

button.addEventListener('click', ()=>{
    console.log("yeet button")

    numbers = input.value;
    
    

    if(numbers >= 8){
        numbers = numbers - 8;
        number[0].innerHTML = '1';
    } 
    else{
        number[0].innerHTML = '0';
    }
    
    
    if(numbers>= 4){
        numbers = numbers - 4;
        number[1].innerHTML = '1';
    } 
    else{
        number[1].innerHTML = '0';
    }
    
    
    if(numbers>=2){
        numbers = numbers - 2;
        number[2].innerHTML = '1';
    }
    else{
        number[2].innerHTML = '0';
    }
    
    if(numbers>=1){
        numbers = numbers - 1;
        number[3].innerHTML = '1';
    }
    else{
        number[3].innerHTML = '0';
    }
    
    if(numbers > 0){
        number[0].innerHTML = 'BRUH';
        number[1].innerHTML = 'NO';
        number[2].innerHTML = 'GO';
        number[3].innerHTML = 'AWAY';
    }
});




