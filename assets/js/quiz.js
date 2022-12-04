var startTimer = document.querySelector('#TimerJS');
var startQuiz = document.getElementById('#beginQuiz');
var showQuestions = document.getElementsByClassName('.hide');


function timerMain(){
    var seconds = 5;
    var timer = setInterval(function(){
        document.getElementById('TimerJS').innerHTML='0'+seconds;
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
        showQuestions.style.display = 'block' ;
    }
   


}


function setNextQuestion(){

}

function selectAnswers(){

}