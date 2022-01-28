const quizQuestion = [
    {
        "Question": 'What is the correct jQuery code to set the background color of all p elements to red?',
        "Option1": '$("p").css("background-color","red");',
        "Option2": '$("p").layout("background-color","red");',
        "Option3": '$("p").manipulate("background-color","red");',
        "Option4": '$("p").style("background-color","red");',
        "Answer": '1',
    },
    {
        "Question": 'What scripting language is jQuery written in?',
        "Option1": 'VBScript',
        "Option2": 'C#',
        "Option3": 'JavaScript',
        "Option4": 'C++',
        "Answer": '3',
    },
    {
        "Question": 'Which jQuery method should be used to deal with name conflicts?',
        "Option1": 'nameConflict()',
        "Option2": 'conflict()',
        "Option3": 'noNameConflict()',
        "Option4": 'noConflict()',
        "Answer": '4',
    },
    {
        "Question": 'Which jQuery method is used to switch between adding/removing one or more classes (for CSS) from selected elements?',
        "Option1": 'switchClass()',
        "Option2": 'switch()',
        "Option3": 'altClass()',
        "Option4": 'toggleClass()',
        "Answer": '4',
    },
    {
        "Question": 'Look at the following selector: $(":disabled"). What does it select?',
        "Option1": 'All elements containing the text "disabled"',
        "Option2": 'All disabled input elements',
        "Option3": 'All elements that does not contain the text "disabled"',
        "Option4": 'All hidden elements',
        "Answer": '2',
    },
];

let index = 0;
let score = 0;

$(document).ready(function(){
    $("#question").hide();
    $("#content h1").text("Quiz Time");
    $("#startButton").html("<i class='bi bi-caret-right-fill'></i> Start Quiz");
    
    $("#startButton").click(function(){
        $("#content").hide();
        createQuestion();
        $("#question").show("slow");
    });



    function createQuestion() {
        let Question = quizQuestion[index].Question;
        let option1 = quizQuestion[index].Option1;
        let option2 = quizQuestion[index].Option2;
        let option3 = quizQuestion[index].Option3;
        let option4 = quizQuestion[index].Option4;
        $(".card-title").text((index + 1) + ". " + Question);
        $("#option1").text(option1);
        $("#option2").text(option2);
        $("#option3").text(option3);
        $("#option4").text(option4);
    }

    $(":radio").click(function(){
        $("#nextQuestionButton").prop('disabled', false);
        $("#nextQuestionButton").removeClass("btn-danger");
        $("#nextQuestionButton").addClass("btn-success");
    });

    $("#nextQuestionButton").click(function(){
        $("#question").hide();
        let answer = quizQuestion[index].Answer;
        if($("input[name='option']:checked").val() == answer) {
            score++;
        }

        if(index == 4) {
            $("#content").show("slow");
            $("#content h1").text("Score : " + score + " / 5");
            $("#startButton").html("<i class='bi bi-caret-right-fill'></i> Start Again..");
            $("#nextQuestionButton").html("<i class='bi bi-caret-right-fill'></i> Next Question ");
            score = 0;
            index = 0;
        } else {
            ++index;
            if(index == 4) {
                $("#nextQuestionButton").text("Finish Quiz");
            }
            createQuestion();
            $("#question").show("slow");
        }
        $(":radio").prop('checked', false);
        $("#nextQuestionButton").prop('disabled', true);
        $("#nextQuestionButton").removeClass("btn-sucess");
        $("#nextQuestionButton").addClass("btn-danger");
    });

});