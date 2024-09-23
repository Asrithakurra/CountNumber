let a=0;
if (a>0){
    document.getElementById("countvalue").style.color="green";
}
else if (a<0){
    document.getElementById("countvalue").style.color="red";
}
function countinc(){
    a=a+1;
    document.getElementById("countvalue").textContent=a;
    if (a>0){
        document.getElementById("countvalue").style.color="green";
    }
    else if (a<0){
        document.getElementById("countvalue").style.color="red";
    }
    else{
        document.getElementById("countvalue").style.color="black";
    }
    
}
function countdes(){
    a=a-1;
    document.getElementById("countvalue").textContent=a;
    if (a>0){
        document.getElementById("countvalue").style.color="green";
    }
    else if (a<0){
        document.getElementById("countvalue").style.color="red";
    }
    else{
        document.getElementById("countvalue").style.color="black";
    }
    
}
function countreset(){
    a=0;
    document.getElementById("countvalue").textContent=0;
    if (a>0){
        document.getElementById("countvalue").style.color="green";
    }
    else if (a<0){
        document.getElementById("countvalue").style.color="red";
    }
    else{
        document.getElementById("countvalue").style.color="black";
    }
}