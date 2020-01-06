//object literal

const salon = {
    name: "The Fashion Pets",
    phone: "5567893",
    address: {
        street: "Av. University",
        number: "262-G",
    },
    workingHours: {
        days: "Mon-Fri",
        open: "9:00 am",
        close: " 5:00 pm",
    },
    pets: [],
    /*     count: function () {
            alert("We have: " + (salon.pets.length) + " pets registered.");  
        } */
}

let { name, phone, address: { street, number }, workingHours: { days, open, close } } = salon;

document.querySelector(".info").innerHTML = `<p> ${name} <br> ${street},${number} <br> ${days} from ${open} to${close} <br> ${phone}`;

document.querySelector("footer .info").innerHTML = `<p> ${name} <br> ${street},${number} <br> ${days} from ${open} to${close} <br> ${phone}`;


//object constructor
var petc = 0;
class Pet {
    constructor(name, age, breed, gender, service, ownerName, phoneContact) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.gender = gender;
        this.service = service;
        this.ownerName = ownerName;
        this.phoneContact = phoneContact;
        this.id = "pet" + petc;
        petc += 1;
        this.hunger = 10;
        this.happiness = 5;
    }
    ownerInfo = function () {
        console.log("Owner name: " + this.ownerName + "\n" + "Phone Contact:" + this.phoneContact);
    }
    feed = function () {
        this.hunger -= 10;
        this.happiness += 10;
        console.log("Feeding ... ");
    }
    status = function () {
        console.log("Hunger: " + this.hunger + "\n" + "Happiness: " + this.happiness);
    }
}

const pet1 = new Pet("Shaggy", 2, "Boxer", "Male", "Shower", "Samantha", "99898");
const pet2 = new Pet("Beans", 4, "Pug", "Male", "Wash", "Susan", "34567");
const pet3 = new Pet("Cookie", 10, "Lab", "Female", "Haircut", "Bob", "43678");

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);
displayPet(pet1);
displayPet(pet2);
displayPet(pet3);

// console.table(salon.pets); 

//display in an alerty message the number of pets

// alert("The number of pets is: " + (salon.pets.length));

/* salon.count(); */

// print in a division the information of the pets (use a loop for)
/* var text = ""
for (var i = 0; i < salon.pets.length; i++) {
    text += `<p> Name: ${salon.pets[i].name} <br> Age: ${salon.pets[i].age} <br> Gender: ${salon.pets[i].gender} <br> Service : ${salon.pets[i].service} <br> Owner Name: ${salon.pets[i].ownerName} <br> Phone Contact: ${salon.pets[i].phoneContact} </p>`;
}
 */


var textname = document.getElementById('petName');
var textage = document.getElementById('petAge');
var textbreed = document.getElementById('petBreed');
var textgender = document.getElementById('petGender');
var textservice = document.getElementById('petService');
var textowner = document.getElementById('ownerName');
var textphone = document.getElementById('phoneContact');

function register() {
    const thePet = new Pet(textname.value, textage.value, textbreed.value, textgender.value, textservice.value, textowner.value, textphone.value);
    salon.pets.push(thePet);
    alert("You have registered a pet. There are: " + (salon.pets.length) + " pets registered.");
    clean();
    displayPet(thePet);
}

function clean() {
    textname.value = "";
    textage.value = "";
    textbreed.value = "";
    textgender.value = "";
    textservice.value = "";
    textowner.value = "";
    textphone.value = "";
}

function displayPet(aPet) {
    var tBody = document.getElementById("rowPet");
    var row = `<tr id="${aPet.id}"> 
                <td>${aPet.name} </td>
                <td>${aPet.age} </td>
                <td>${aPet.breed} </td>
                <td>${aPet.gender} </td>
                <td>${aPet.service} </td>
                <td>${aPet.ownerName} </td>
                <td>${aPet.phoneContact} </td>
                <td>
                <button onclick='remove("${aPet.id}");'> Delete </button>
                </td>`;

    tBody.innerHTML += row;
}

function remove(petId) {

    var tr = document.getElementById(petId);
    var indexDelete;


    //searching for the pet using the id
    for (var i = 0; i < salon.pets.length; i++) {
        var selectedPet = salon.pets[i];

        if (selectedPet.id == petId) {
            indexDelete = i;
        }
    }
    //delete in the array
    salon.pets.splice(indexDelete, 1);

    //delete in the html
    tr.remove();

}
function Search() {
//delete search css with this loop
    //for (var j = 0; j < salon.pets.length; j++) {
           // document.getElementById('pet'+j).setAttribute('class','x');
   // } 
   // $("#pet"+i).show();

    var ss = document.getElementById('petSearch').value;
    var searchString = ss.toLowerCase();
//searching for the pet
    var flag = false;
    for (var i = 0; i < salon.pets.length; i++) {
        var theFoundedPet = salon.pets[i];
        if ((theFoundedPet.id.toLowerCase() == searchString) || (theFoundedPet.name.toLowerCase() == searchString)) {
            flag = true;
            index=i;
            // document.getElementById('pet'+index).setAttribute('class','found');
            /* document.getElementById("result").innerHTML="I found the pet " + salon.pets[i].name;
            salon.pets[i].name; */
            $("#pet"+i).show();
        }
        else{    
            $("#pet"+i).hide();
        }
    }
    //other condition for not existing pet
    if (flag == false) {
        document.getElementById("result").innerHTML = "It does not exist";
    }
    document.getElementById("petSearch").value = "";
}

