

let keyboard = document.getElementById("keyboard")
let display = document.getElementById("display")

keyboard.addEventListener('click',(e)=>{
    let value = e.target.innerText;

    if(value === 'C'){
        display.innerText = "";
    }
    else if(value === "="){
        display.innerText = eval(display.innerText);
    }
    else
    {
        display.innerText += value;
    }
})

