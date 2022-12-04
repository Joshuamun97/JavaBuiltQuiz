var startTimer = document.querySelector('#TimerJS');
var startQuiz = document.getElementById('#beginQuiz');
var showQuestions = document.querySelector('.hide');


function timerMain(){
    var seconds = 5;
    var timer = setInterval(function(){
        document.getElementById('TimerJS').innerHTML= +seconds;
        console.log (seconds);
        if (seconds === 0) {
            console.log ("seconds")
            document.getElementById('TimerJS').innerHTML='Sorry, Time is Up!'
            clearInterval(timer);
        }
        seconds--;

    }, 1000);
}
document.getElementById('beginQuiz').addEventListener('click', timerMain);
document.getElementById('beginQuiz').addEventListener('click', startGame);


function startGame(){
    this.style.display = 'none'; 
    if(this.style.display == 'none') {
        console.log(showQuestions);
        showQuestions.classList.remove('hide');
        showQuestions.classList.add('show')
    }
   
}


function setNextQuestion(){
var Button= document.querySelector('btn');
    if (Button==document.querySelector('btn'));
    console.log('Bet');
}

document.querySelector('btn').addEventListener('click', setNextQuestion);

function selectAnswers(){

}