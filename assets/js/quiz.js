var startTimer = document.querySelector('#TimerJS');
var startQuiz = document.getElementById('#beginQuiz');
var showQuestions = document.querySelector('.hide');
var ShowForm = document.querySelector('.hidden')
var question = [
    {
        title: 'What City in Arizona has the largest population?',
        answers: ['Flagstaff', 'Cottonwood', 'Phoenix', 'Sedona'],
        correctAnswer: 2
    },
    {
        title: 'What Town in Arizona is home to the famous haunted hotel, The Grand Hotel?',
        answers: ['Cottonwood', 'Payson', 'Phoenix', 'Jerome'],
        correctAnswer: 3
    },
    {
        title: 'What Nickname was the state of Arizona given?',
        answers: ['The Hottest State on Earth', 'The Grand Canyon State', 'Rising Sun State', 'The Vortex State'],
        correctAnswer: 1
    },
    {
        title: 'Which of the following Seven Natural Wonders of The World is Arizona home to?',
        answers: ['The Grand Canyon', 'Great Barrier Reef', 'Mount Everest', 'Aurora Borealis'],
        correctAnswer: 0
    }];
var titleDiv = document.getElementById('question');
var arrindex = 0

titleDiv.textContent = question.title;



function timerMain() {
    var seconds = 40;
    var timer = setInterval(function () {
        document.getElementById('TimerJS').innerHTML = +seconds;
        console.log (seconds)
        if (seconds === 0) {
            document.getElementById('TimerJS').innerHTML = 'Times up! Enter your name to see how you did compared to other players!';
            clearInterval(timer);
            showQuestions.classList.remove('show');
            showQuestions.classList.add('hide');
            ShowForm.classList.remove('hidden');
            ShowForm.classList.add('form');
             }
        if (question[arrindex] === undefined) {
            document.getElementById('TimerJS').innerHTML = 'Enter your name to see how you did compared to other players!'
            clearInterval(timer);
        
        }
        seconds--;
        

    }, 1000);
}
document.getElementById('beginQuiz').addEventListener('click', timerMain);
document.getElementById('beginQuiz').addEventListener('click', startGame);


function startGame() {
    this.style.display = 'none';
    if (this.style.display == 'none') {
        showQuestions.classList.remove('hide');
        showQuestions.classList.add('show')
    }
    questionView(question)

}
function questionView() {

    if (question[arrindex] !== undefined) {
        var titleDiv = document.getElementById('question');
        titleDiv.textContent = question[arrindex].title;
        var ans = document.querySelectorAll('.btn');
        ans.forEach(function (element, index) {
            element.textContent = question[arrindex].answers[index]
        })
    }
}






function setNextQuestion() {
    arrindex++;
    questionView();
    if (question[arrindex] === undefined) {
        showQuestions.classList.remove('show');
        showQuestions.classList.add('hide');
        ShowForm.classList.remove('hidden');
        ShowForm.classList.add('form');
    }

}
function scoreKeeper() {
    var checkAnswer=0;
    var answer1=document.querySelector('#btn3').addEventListener('click', setNextQuestion);
 //   if (question[0].correctAnswer===){
  //      console.log('Correct!')
 //   }

}

//document.getElementById("MyForm").submit('click');

document.querySelector('#btn1').addEventListener('click', setNextQuestion);
document.querySelector('#btn2').addEventListener('click', setNextQuestion);
document.querySelector('#btn3').addEventListener('click', setNextQuestion);
document.querySelector('#btn4').addEventListener('click', setNextQuestion);

