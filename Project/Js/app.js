function personnel(display) {
    let lastNames = [
    "Pagan","Land","Tidwell",
    "Lovell","Miner","Doss",
    "Dahl","Delatorre","Stanford",
    "Kauffman","Vela","Gagnon",
    "Winston","Gomes","Thacker",
    "Coronado","Ash","Jarrett",
    "Hager","Samuels","Metzger",
    "Raines","Spivey","Maurer",
    "Han","Voss","Henley",
    "Caballero","Caruso","Coulter",
    "North","Finn","Cahill",
    "Lanier","Souza","Mcwilliams"];

    let chosenName = lastNames[Math.floor(36 * Math.random())];

    return chosenName; 
    
}

var info = {};

function submitForm(){
    let display = document.getElementById("paragraph");

    info.nameVal = document.getElementById("fname").value;
    info.addressVal = document.getElementById("address").value;
    info.coords = document.getElementById("coords").value;



    info.accident = document.getElementsByName("accident");

    

    display.innerHTML = 'Your support ticket<br>';
    display.innerHTML += `Full name: ${info.nameVal}<br>`;
    display.innerHTML += `Address: ${info.addressVal}<br>`;
    display.innerHTML += `Location coordinates: ${info.coords}<br>`;

    for(let i = 0; i < info.accident.length; i++){
        if(info.accident[i].checked){
            display.innerHTML += `${info.accident[i].value}<br>`;
            break;
        }
    }   


    info.officer = `<br>Responsible for the operation is officer ${personnel(display)}`;
    display.innerHTML += info.officer;


    return false;

}