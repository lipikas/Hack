findLocationBtn = document.querySelector('#locationBtn');


if (findLocationBtn){

    findLocationBtn.addEventListener('click', ()=>{
        window.open('https://www.redcrossblood.org/give.html/find-drive')
    
    })


}



donateBtn = document.querySelector('.donateBtn');

if (donateBtn){
    donateBtn.addEventListener('click', () =>{

        donateBtn.style.visibility = 'hidden';
        document.querySelector('#addressText').style.visibility = 'visible';
        document.querySelector('#bloodAddress').style.visibility = 'visible';
        document.querySelector('#submitButton').style.visibility = 'visible';
    
    })

}

const buttons = document.querySelectorAll('.buttonb1');

buttons.forEach((button)=>{

    button.addEventListener('click', () =>{
        points += 10;
    })
})

var myquestions = [
    {
        questions: "Up to how many lives can one donation save?",
        answers: ["2","4", "400", "3"],
        correct: 3
    },
    {
        questions: "Approximately how many units of red blood cells are needed everyday in the U.S.?",
        answers: ["30,000", "100,000", "36,000","25,000"],
        correct: 2
    },
    {
        questions: "Which blood type is most requested by hospitals?",
        answers: ["O", "A", "AB", "B"],
        correct: 0
    },
    {
        questions: "A single car accident victim can require as many as ____ units of blood?",
        answers: ["10","90","1000","100"],
        correct: 3
    },
    {
        questions: "How many units of whole blood cells and red blood cells are collected in the U.S. in a year?",
        answers: ["2.4 million","13.6 million","400 million","33.7 million"],
        correct: 1
    },
    {
        questions: "Less than ___% of the population is eligible to give blood or platelets?",
        answers: ["26","90","38","10"],
        correct: 2
    },
    {
        questions: "Each year, about how many people in the U.S. donate blood?",
        answers: ["34.5 million","2 million","0.2 million","6.8 million"],
        correct: 3
    },
];

//this is where the question is generated
const thisQuestion = document.getElementById("question");
const ques1 = document.getElementById("btn1");
const ques2 = document.getElementById("btn2");
const ques3 = document.getElementById("btn3");
const ques4 = document.getElementById("btn4");
var whichQuestion = Math.floor(Math.random()*6);
showQuestion();
console.log(whichQuestion);

function showQuestion(){
    thisQuestion.innerText = myquestions[whichQuestion].questions;
    ques1.innerText = myquestions[whichQuestion].answers[0];
    ques2.innerText = myquestions[whichQuestion].answers[1];
    ques3.innerText = myquestions[whichQuestion].answers[2];
    ques4.innerText = myquestions[whichQuestion].answers[3];
}

//toggles the button
var count = 0;
function check1(x){
    
    if(x == myquestions[whichQuestion].correct){
        alert("Hooray!");
        document.getElementById("btn1").style.background="green";
    }else{
        alert("BOOO!");
        document.getElementById("btn1").style.background="red";
    }
    
}
function check2(x){
    if(x == myquestions[whichQuestion].correct){
        alert("Hooray!");
        document.getElementById("btn2").style.background="green";
    }else{
        alert("BOOO!");
        document.getElementById("btn2").style.background="red";
    }
    
}
function check3(x){
    if(x == myquestions[whichQuestion].correct){
        alert("Hooray!");
        document.getElementById("btn3").style.background="green";
    }else{
        alert("BOOO!");
        document.getElementById("btn3").style.background="red";
    }
    
}
function check4(x){
    if(x == myquestions[whichQuestion].correct){
        alert("Hooray!");
        document.getElementById("btn4").style.background="green";
    }else{
        alert("BOOO!");
        document.getElementById("btn4").style.background="red";
    }
}

const loginBtn = document.querySelector('#show-login') ;



