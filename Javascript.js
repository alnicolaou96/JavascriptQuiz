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
var inputedWord=false;  //checks if user inputed characters
function SaveThree(){
    //shortcut
    var x= document.getElementById("faveWord");

    //tests if the input is not empty 
    if((x.value!=="")&&(!isNaN(x.value))){
        inputedWord=true;   //allows user to move to the next question
        favoriteWord=x.value;   //saves word
    }
    else{
        alert("Come on man, be cool. Just input a word");
    }

    //stops this question and starts the next
    if(inputedWord===true){
    document.getElementById("questionThree").style.display="none";
    document.getElementById("questionFour").style.display="flex";
    }
}


//////////////////////////////////////////////////////////////////////////////////////


//Question Four
//Checkboxes for user's favorite animals
var favoriteAnimals= new Array(0,0,0,0,0,0);    //where the values of selected checkboxes will be saved
function SaveFour(){
    var checkbox=document.getElementsByName("Animal");

    //takes the values of the checked boxes and adds it to the favorite animals array
    for (var i=0; i<checkbox.length;i++){
        if (checkbox[i].checked){
            favoriteAnimals[i]=checkbox[i].value;
        }
    }

    //stops this question and starts the next
    document.getElementById("questionFour").style.display="none";
    document.getElementById("questionFive").style.display="flex";
}


//////////////////////////////////////////////////////////////////////////////////////


//Question Five
//User's favorite color

var color;
function SaveFive(){
    //saves color
    var faveColor=document.getElementById("color").value;
    document.getElementById("body").style.backgroundColor=faveColor;
    color=faveColor;

    //stops this question and starts the next
    document.getElementById("questionFive").style.display="none";
    document.getElementById("results").style.display="flex";
}


//////////////////////////////////////////////////////////////////////////////////////


//Results
var largestNum=0;
for(var i=0;i<favoriteNumbers.length;i++){
    if(largestNum<favoriteNumbers[i]){
        largestNum=favoriteNumbers[i];
    }
}
document.getElementById("resultText").innerHTML=favoriteWord;
for(var i=0; i<largestNum;i++){
document.getElementById("results").appendChild(div).innerHTML=favoriteWord;
}