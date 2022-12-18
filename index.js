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
    {
        question:"Which is naman Favourite color",
        answer:"Blue"
    },
    {
        question:"Name of his Dog",
        answer:"rocky"
    },
    {
         question:"Name of his brother",
         answer:"Shyam"
    }
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
    console.log("Correct answer are below =>");
    for(var i=0;i<questions.length;i++)
    {
        console.log(`${questions[i].question} :  ${questions[i].answer}`)
    }
    
}

welcome();
game();