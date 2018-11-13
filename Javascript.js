//Start button
function StartQuiz(){
    //shortens this section of code into a variable
    var x=document.getElementById("startButton");

    //when the button is pressed the first question will appear and the button will disappear
    x.style.display="none";
    if(x.style.display==="none"){
        document.getElementById("questionOne").style.display="flex";
    }
}


//////////////////////////////////////////////////////////////////////////////////////


//Question One
var answerOne;  //where the value of the checked radio is saved
function SaveOne(){
    //shortens this section of code into a variable
    var radios= document.getElementsByName("answerOne");

    // checks all the radio buttons and only takes the values of the selected ones
    for(var i=0;i<radios.length;i++){
        if(radios[i].checked){
            answerOne=radios[i].value;
            break;
        }
    }

    //gets rid of this question and opens up the next
    document.getElementById("questionOne").style.display="none";
    document.getElementById("questionTwo").style.display="flex";
}


//////////////////////////////////////////////////////////////////////////////////////


//Question Two
//user inputed array that takes no repeated numbers and no nulls
var favoriteNumbers= new Array(5);  //user inputed arrays
var userInput=0;    //counter that tracks how many times the user inputed
var noRepeatedNumbers=true;  //bool for tracking repeated numbers
function SaveTwo(){
    //shortens this section of code into a variable
    var fave=document.getElementById("faveNumbers");

    //makes sure entry is not empty
    if(fave.value===""){
        alert("please input a number, you coward");
    }

    //no repeated numbers
    for(var i=0; i<userInput;i++){
        if (fave.value===favoriteNumbers[i]){
            alert("you already inputed this number, bro");
            noRepeatedNumbers=false;
            break;
        }
    }

    //saves number input into array
    if((fave.value!=="")&&(noRepeatedNumbers===true)){
    favoriteNumbers[userInput]=fave.value;
    userInput++;
    }

    //makes the text bar blank for the next input
    fave.value="";

    //resets the bool to check if the next number input is repeated
    noRepeatedNumbers=true;

    //stops this section of the quiz after 5 inputs and starts the next
    if(userInput===5){
    document.getElementById("questionTwo").style.display="none";
    document.getElementById("questionThree").style.display="flex";
    }
}


//////////////////////////////////////////////////////////////////////////////////////


//Question Three
//User's inputed favorite word
var favoriteWord="";    //variable that saves user's favorite word
function SaveThree(){
    //saves user's favorite word
    var x= document.getElementById("faveWord");
    favoriteWord=x.value;

    //stops this question and starts the next
    document.getElementById("questionThree").style.display="none";
    document.getElementById("questionFour").style.display="flex";
}

//////////////////////////////////////////////////////////////////////////////////////


//Question Four
//Checkboxes for user's favorite animals
var favoriteAnimals= new Array(6);   //where the values of selected checkboxes will be saved
function SaveFour(){
    var checkbox=document.getElementsByName("Animal");

    for (var i=0; i<checkbox.length;i++){
        if (checkbox[i].checked){
            favoriteAnimals[i]=checkbox.value;
            console.log(checkbox.value);
        }
    }
    alert(favoriteAnimals);
 
}