const questions = [
    {
        question: "Whch is the lrgest animal in the world",
        answers: [
            {text:"Shark" , correct:false},
            {text:"Elephant" , correct:false},
            {text:"Girrafe" , correct:false},
            {text:"Blue Whale" , correct:true},
        ]
    },
    {
        question: "Whch is the lrgest animal in the world",
        answers: [
            {text:"Shark" , correct:false},
            {text:"Elephant" , correct:false},
            {text:"Girrafe" , correct:false},
            {text:"Blue Whale" , correct:true},
        ]
    },
    {
        question: "Whch is the lrgest animal in the world",
        answers: [
            {text:"Shark" , correct:false},
            {text:"Blue Whale" , correct:true},
            {text:"Girrafe" , correct:false},
            {text:"Giant Squid" , correct:true},
        ]
    },
    {
        question: "Whch is the lrgest animal in the world",
        answers: [
            {text:"Shark" , correct:false},
            {text:"Elephant" , correct:false},
            {text:"Blue Whale" , correct:true},
            {text:"Girrafe" , correct:false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buton");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex=0;
let score = 0 ;


function startQuiz(){
    currentQuestionIndex=0; 
    score=0;          // when the game starts the question index should be 0 and score should be also 0 
    nextButton.innerHTML = "Next Qeustion"; //?
    showQuestion();
}


function showQuestion(){ // this func is to display the questions 


    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;  // to incriment the question index
    questionElement.innerHTML = questionNo + ". "+currentQuestion;
    question; 


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");  // this line will create the button with answer txt as the button
        button.innerHTML = answer.text; // this line display the text in answer array of the question oject in the button tag
        button.classList.add("btn"); // this will add btn class name in the button
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
        
    });
}



function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild); // this line will remove the previous question and answer 
    }
}



function selectAnswer(){

    const selectBtn = e.taret;
    const isCorrect = selectBtn.dataset.correct === "true";

    if(isCorrect){
        selectBtn.classList.add("correct");  // adds a class name to the button of the options
        score++;
    }else {
        selectBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {  // these line of code are there to prevent multiple selection , 
        if(button.dataset.correct === "true"){
            button.classList.add("correct"); // after the correct button is selected the buttons are disabled
        }
        button.disabed = true;
    });

    nextButton.style.display = "block"; // and after the selection it will show the next button 
}


function handleNextButton(){
currentQuestionIndex++;

if(currentQuestionIndex< questions.length){
    showQuestion();
}else{
    showScore();
}
}



function showScore(){
    resetState();

    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;

    nextButton.innerHTML = "Play Again";

    nextButton.style.display = "block";
}


nextButton.addEventListener("click" , () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();  // suppose if there is not a next question it will restart the quiz
    }
})

startQuiz();
