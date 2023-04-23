function store(){ //stores items in the localStorage
    var studentname = document.getElementById('name').value;
    var studentaddress = document.getElementById('address').value;
    var key = document.getElementById('key').value;

    const stu = {
        name: studentname,
        address: studentaddress,
    }

    localStorage.setItem(key,JSON.stringify(stu));  
    //converting object to string
}

function retrieveRecords(){ //retrieves items in the localStorage
    var key = document.getElementById('retrieveKey').value; //gets key from user
    console.log("retrive records");
    var records = localStorage.getItem(key); //searches for the key in localStorage
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph);
}

function removeItem(){ //deletes item from localStorage
    var key = document.getElementById('removeKey').value; //gets key from user
    localStorage.removeItem(key) //passes key to the removeItem method
    console.log("remove items");
}

function clearStorage(){ //clears the entire localStorage
    localStorage.clear()
    console.log("clear records");
}

window.onload =function(){ //ensures the page is loaded before functions are executed.
    document.getElementById("studentform").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("retrieveButton").onclick = retrieveRecords
}
// var records = JSON.parse(localStorage.getItem(key)); //searches for the key in localStorage
// var paragraph = document.getElementById("p");
// //var infor = document.createTextNode(records.name);
// // paragraph.appendChild(records.name);
// // var element = document.getElementById("retrieve");
// // element.appendChild(paragraph);
// paragraph.innerHTML=records.name;