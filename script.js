function changeRed(){
    document.querySelector('body').style.backgroundColor = "red";
}

function changeBlue(){
    document.querySelector('body').style.backgroundColor = "blue";
}

function changePurple(){
    document.querySelector('body').style.backgroundColor = "purple";
}

function changeBlack(){
    document.querySelector('body').style.backgroundColor = "black";
}

function changePink(){
    document.querySelector('body').style.backgroundColor = "pink";
}

function changeGreen(){
    document.querySelector('body').style.backgroundColor = "green";
}

function changeYellow(){
    document.querySelector('body').style.backgroundColor = "yellow";
}

function changeCustomColor(){
    const colorChoice = prompt("Enter Your Preferred Color: ");
    if (colorChoice != ""){
        const newBtn = document.createElement('button');
        newBtn.innerHTML = colorChoice;
        newBtn.style.backgroundColor = colorChoice;
        newBtn.onclick = function() {
            document.querySelector("body").style.backgroundColor = colorChoice;
        };
        document.querySelector(".container").appendChild(newBtn);
    }
}