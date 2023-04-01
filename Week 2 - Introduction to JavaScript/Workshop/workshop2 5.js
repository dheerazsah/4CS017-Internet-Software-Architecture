/*
Qno1
var todayDate = new Date();
var day = todayDate.getDay();

var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var meridiem = todayDate.getHours() >= 12 ? " PM " : " AM ";

console.log("Today is: " + weekday[day]);
console.log("Current Time: " + todayDate.getHours() + meridiem + ": " + todayDate.getMinutes() + " : " + todayDate.getSeconds())
*/

/*
Qno2
function lastDigit(a,b,c) {
    if (a % 10 == b % 10 && a % 10 == c % 10) {
        console.log(a, b, c, "Last digit are same");
    } else {
        console.log(a, b, c, "Last digit are not same");
    }
}
lastDigit(10,20,30)
*/

/*
Qno3
function guessNumber() {
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    userNumber = Number(prompt("Please enter a number from 1 to 10"));
    if (randomNumber == userNumber) {
        alert("Good Work");
    } else {
        alert("Not Matched. The number was " + randomNumber);
    }
}
guessNumber() 
*/


/*
Qno4
function identity(name, age, gender, favourite_team) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.favourite_team = favourite_team;
}

var identityOne = new identity("Ram", "19", "Male", "FK Athens");
var identityTwo = new identity("Jagdish", "23", "Male", "Mallorca");
var identityThree = new identity("Bibina", "21", "Female", "Girona");
var identityFour = new identity("Sommer", "27", "Male", "Shrewsbury");
var identityFive = new identity("Sameera", "23", "Female", "Internationale");
var totalIdentity = [];
totalIdentity.push(identityOne, identityTwo, identityThree, identityFour, identityFive);

for (let identity of totalIdentity) {
    if (identity.gender == "Male") {
        identity.gender = "His";
    } else {
        identity.gender = "Her";
    }
    console.log(identity.name + " is " + identity.age + " years of age. " + identity.gender + " favorite football team is " + identity.favourite_team);
} 
*/


/*
Qno5
function newstudents(name, cs01, cs02, cs03, cs04) {
    this.name = name;
    this.cs01 = cs01;
    this.cs02 = cs02;
    this.cs03 = cs03;
    this.cs04 = cs04;
}

var studentOne = new newstudents("Ram", 65, 80, 68, 72);
var studentTwo = new newstudents("Jagdish", 56, 61, 63, 68);
var studentThree = new newstudents("Bibina", 51, 48, 63, 68);
var studentFour = new newstudents("Sommer", 48, 65, 61, 76);
var studentFive = new newstudents("Sameera", 65, 45, 86, 96);
var totalStudents = [];

totalStudents.push(studentOne, studentTwo, studentThree, studentFour, studentFive);
console.log("Name       Marks       Grade       Remark");

for (let student of totalStudents) {
    var markScored = (student.cs01 + student.cs02 + student.cs03 + student.cs04)/4;
    if (markScored >= 70 && markScored <= 100){
        console.log(student.name + "        " + markScored + "         " + "A" + "         " + "Excellent");

    } else if (markScored >= 60 && markScored <= 69) {
        console.log(student.name + "        " + markScored + "         " + "B" + "         " + "Very Good");

    } else if (markScored >= 50 && markScored <= 59) {
        console.log(student.name + "        " + markScored + "         " + "C" + "         " + "Good");

    } else if (markScored >= 43 && markScored <= 49) {
        console.log(student.name + "        " + markScored + "         " + "D" + "         " + "Satisfactory");

    } else if (markScored >= 40 && markScored <= 43) {
        console.log(student.name + "        " + markScored + "         " + "E" + "         " + "Sufficient");

    } else if (markScored >= 0 && markScored <= 39) {
        console.log(student.name + "        " + markScored + "         " + "F" + "         " + "Fail");
    }
} 
*/