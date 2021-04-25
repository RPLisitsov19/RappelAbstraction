function submitForm(){
    let display = document.getElementById("paragraph");
    display.innerHTML = "Your support ticket";

    display.innerHTML += "<br>";

    let nameVal = document.getElementById("fname").value;
    display.innerHTML += nameVal + "<br>";

    let addressVal =  document.getElementById("address").value;
    display.innerHTML += addressVal + "<br>";

    let coords = document.getElementById("coords").value;
    display.innerHTML += coords + "<br>";

    let accident = document.getElementsByName("accident");
    
    for(let i = 0; i < accident.length; i++){
        if(accident[i].checked){
            display.innerHTML += accident[i].value + "<br>";
            break;
        }
    }

    return false;
}