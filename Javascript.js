//Start button
function StartQuiz(){
    var x=document.getElementById("startButton");
    x.style.display="none";
    if(x.style.display==="none"){
        document.getElementById("questionOne").style.display="flex";
    }
}


//Question One
var answerOne;
function SaveOne(){
    var radios= document.getElementsByName("answerOne");
    for(var i=0;i<radios.length;i++){
        if(radios[i].checked){
            answerOne=radios[i].value;
            break;
        }
    }
    document.getElementById("questionOne").style.display="none";
    document.getElementById("questionTwo").style.display="flex";
}

//Question Two
//user inputed array that takes no repeated numbers and no nulls
var favoriteNumbers= new Array(5);
var userInput=0;
var noRepeatedNumbers=true;
function SaveTwo(){
    var fave=document.getElementById("faveNumbers");

    if(fave.value===""){
        alert("please input a number, you coward");
    }

    for(var i=0; i<userInput;i++){
        if (fave.value===favoriteNumbers[i]){
            alert("you already inputed this number, bro");
            noRepeatedNumbers=false;
            break;
        }
    }

    if((fave.value!=="")&&(noRepeatedNumbers===true)){
    favoriteNumbers[userInput]=fave.value;
    userInput++;
    }
    
    noRepeatedNumbers=true;

    if(userInput===5){
    document.getElementById("questionTwo").style.display="none";
    document.getElementById("questionThree").style.display="flex";
    }
}

//Question Three
//Counting character of inputed word
var favoriteWord="";
function SaveThree(){
    var x= document.getElementById("FaveWord");
    favoriteWord=x.value;
    alert(favoriteWord);
}
