const readlineSync = require('readline-sync');

var point = 0;

function welcome() {
    var name = readlineSync.question("What is you Name");

    console.log(`welcome ${name} Let's play a Game "Do you know naman"`);
}


var questions = [
    {
        question: "what is age of naman",
        answer:"21"
    },
    {
        question:"where do Naman live",
        answer:"Udaipur"
    },
    {
        question:"Who is Naman favourite character",
        answer:"Thomas Shelby"
    },
]

function play(question,answer)
{
    var userAnswer=readlineSync.question(question)

    if(userAnswer.toLowerCase() === answer.toLowerCase())
    {

        console.log("right!");
        point=point+1;
    }
    else
    {
        console.log("wrong!");
    }
}

function game()
{
    for(var i=0;i<questions.length;i++)
    {
        play(questions[i].question,questions[i].answer)
    }

    console.log("your Final score is "+point);
}

welcome();
game();