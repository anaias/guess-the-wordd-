player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " :   ";
document.getElementById("player2_name").innerHTML = player2_name + " :   ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn :-  " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn  :-  " + player2_name;

function sendWord() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log(word);

    charAt1 = word.charAt(1);
    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1 = word.length-1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    question_word = "<h4 id = 'word_display' >QUE: " + remove_charAt3 + "</h4>";
    inputbox = "<br> ANS: <input type = 'text' id = 'inputcheckbox'>";
    checkbutton = "<br><br> <button class='btn btn-info' onclick='check()' >Check your answer!</button>";

    row = question_word + inputbox + checkbutton;
    document.getElementById("output").innerHTML = row;

    document.getElementById("word").value = " ";
    
}

question_turn = "player1";
answer_turn = "player2";

let sound = document.querySelector('#audio');

function check() {
    getAnswer = document.getElementById("inputcheckbox").value;
    answer = getAnswer.toLowerCase();
    console.log(answer);

    if (answer == word) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        sound.play();
            window.alert("YAYAY! ITS THE CORRECT ANSWER!");
        }

        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
            let sound = document.querySelector('#audio');
        sound.play();
            window.alert("YAYAY! ITS THE CORRECT ANSWER!");
        }
    }

    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question turn:  " + player2_name;
    }
    else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML ="Question turn:  " + player1_name;
    }

if (answer_turn == "player1") {
    answer_turn = "player2";
    document.getElementById("player_answer").innerHTML ="Answer turn:  " + player2_name;
}

else{
    answer_turn = "player1";
    document.getElementById("player_answer").innerHTML = "Answer turn:  " + player1_name;
}

document.getElementById("output").innerHTML = "";





}

