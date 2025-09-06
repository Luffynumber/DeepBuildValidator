/*let age = 20;
let powerlevel = 10000;
let price = 100;
let firstname = "Abulfitouh Abdurahman Anwar the 3rd";
let favoritefood = "cornbread";

console.log(age);

console.log("you are $(age) years old");//--> 20
console.log("His powerlevel is OVER $(powerlevel)!!!");//--> 10000
console.log('you gotta pay $$(price)');// $$ --> $100


console.log(typeof powerlevel);//typeof prints the type of data (powerlevel is)
console.log(typeof firstname);//--> string
console.log(tyoeof favoritefood); //--> string

let online = false;
let forsale = true;
let age = 20;

console.log(typeof online); //==> True
console.log(online);
console.log(`the fact that tutu is a boy is: ${online}`)

console.log(`is this car for sale?: ${forsale}`);*/


// backquotes (``) are the equivelant of f-string in javascript!
// backquote is needed works kinda like f-strings on python 
//console.log("Tutu is online on roblox!" ${online} );//--> Tutu is online on roblox! Tru

//document.getElementById("p1").textContent = `you are ${age} years old`;
//document.getElementById('p2').textContent = `true or false?: ${online}`;


// students = students + 1;  (+= python)
//students = students -1; the  (-= python)

//let students = 30;

//students += 2;
//students/=2;
//students %= 2;
//students = students ** 2;
// students = students -1;
// or just use the -= just like python
//students ++; incrament operator brings it up by 1 and only by 1
//console.log(students)
//students--; decrement operator that brings it down by 1 and only 1
//console.log(students);


//let result = 6 / 2 ** (0-1);

//console.log(result);

/*let username;
this is a window pop up interesting**
username = window.prompt("Whats your username?");
console.log("username")*/
//⬇️example of what and how to do it
/*et hide; failure do not copy this!!!
document.getElementById("stats-btn-c").onclick = function(){
    hide = document.getElementById("str-input").value;
    document.getElementById("str-input").textContent = `Hello ${hide}`
    //console.log(`${hide}`);*/
// THIS IS GOOD THIS A GOOD EXAMPLE TO GO OFF BY ⬇️⬇️⬇️⬇️✨
/*let popup;

    document.getElementById("stats-btn-c").onclick = function(){
    popup = window.prompt("what is your strength stats");
}*/

//let age =5;
//age = String(age); // must be captialized "S" in String

//console.log(age, typeof age)

/*let x = "pizza"
let y = "Pizza"
let z = "pizza"*/

// x = Number(x); //"NaN" is what i get if i try to make "pizza" into a number
// y = Boolean(y); //"True" is what i get for turning "pizza" into a boolean
// z = String(z); //Pizza stays and its says "string" next to it 



//console.log(x, typeof x)
//console.log(y, typeof y)
//console.log(z, typeof z)

// const = a variable that cant be changed

//const PI = 3.141592;
// once you make a const you cant add another with the same name!

//radius = window.prompt("Enter the radius of a circle");
//radius = Number(radius); //to turn the user input into a number

//let circ = 2 * pi * radius;
/*const totalstats = 330
let corestatsover1 = document.getElementById("")
const shrineoforder = totalstats / 
*/

/*document.getElementById("mysubmit").addEventListener("click" ,function(){
    let radiusInput = document.getElementById("myText").value;
    let radius = Number(radiusInput);
    if (isNaN(radius)){
    document.getElementById("myh3").textContent = "please enter a valid number"; 
    } else {
        let circ = 2* PI *radius;
        document.getElementById("myh3").textContent = circ.toFixed(2) + "cm";
    }}
)*/
//buttons to show categories
const statbutton = document.getElementById("stats-btn-c");
const talentbutton = document.getElementById("talents-btn-c");
const weaponsbutton = document.getElementById("weapons-btn-c");
const gearbutton = document.getElementById("Equipment-btn-c");
const mantrabutton = document.getElementById("Mantras-btn-c");
const overviewbutton = document.getElementById("Overview-btn-c");
//all of the content displays in one display variable
const btnCategoryDisplay = document.getElementsByClassName(".category-content")


const buttonsCategory = document.querySelectorAll(".main-buttons button");
//content displayed by the buttons above
const statsdisplay = document.getElementById("stats-content");
/*const talentdisplay = document.getElementById(""); EXAMPLES
const  = document.getElementById(""); EXAMPLES
const  = document.getElementById(""); EXAMPLES
const talentdisplay = document.getElementById(""); EXAMPLES
const talentdisplay = document.getElementById("");EXAMPLES*/
const talentdisplay = document.getElementById("Talents-content");


// this is good too ⬇️⬇️ ex of how i should display the stats
document.getElementById("str-input").addEventListener("input",function(){
    let strstat = document.getElementById("str-input").value;
    let str = Number(strstat);
    //change the location of where the textcontent of str shows up later
    document.getElementById("myh3").textContent = "strength:" + str;
    //console.log(str);
});



buttonsCategory.forEach(buttonss => {
    buttonss.addEventListener("click", () => {
        if(buttonss === statbutton){
            if(statsdisplay.style.display === "none"){
                statsdisplay.style.display = statsdisplay.style.display = "grid";
            }else{
                statsdisplay.style.display = statsdisplay.style.display = "none";
            }
        }
        if(buttonss === talentbutton){
            if(talentdisplay.style.display === "none"){}

        }
    });
});
/*
buttonsCategory.forEach(buttonss => {
    buttonss.addEventListener("click", () => {
        if(statbutton){
            statsdisplay.style.display = statsdisplay.style.display === "none" ? "grid" : "none";
        }
    });
});
buttonsCategory.forEach(buttonss => {
    buttonss.addEventListener("click", () => {
        if(talentbutton){
            talentdisplay.style.display = talentdisplay === "none" ? "grid" : "none";
        }
    });
}); */

/*
talentbutton.addEventListener('click', function(){
    if(talentdisplay.style.display === "none"){
        talentdisplay.style.display = "block"
    }
    else{
        talentdisplay.style.display = "none";
    }
})*/



//let hidden;

/* function findit(name, numberofage){
    console.log("found it!");
    console.log(`found it! ${name}`);
    console.log("found it!");
    console.log(`found it AGAIN!${numberofage}`);
}

findit("Tutu", 25); 

for(let i=1; i <= 10; i++){ //i++, means to increment by 1 each time
    if(i === 7){
        break; //skips the iteration when its the same as 7
    }
    else{
        console.log(`Number of wipes: ${i}`);
    }
    
}

console.log("DANG YOU SUCK!")*/