function greetUser(){
    let user = document.getElementById("name").value

    if(user == ""){
        document.getElementById("heading").innerHTML = "Hello"
    }
    else{
        document.getElementById("heading").innerHTML = "Hello! " + user
    }
}


function fillColor(box){
    let color = box.innerHTML;
    box.style.backgroundColor = color;
}