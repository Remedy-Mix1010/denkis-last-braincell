name1 = localStorage.getItem("username1");
name2 = localStorage.getItem("username2");
document.getElementById("gameplayer1").innerHTML = name1;
document.getElementById("gameplayer2").innerHTML = name2;
score1 = 0;
score2 = 0;
document.getElementById("player1score").innerHTML = score1;
document.getElementById("player2score").innerHTML = score2;
function yes(){
number1 = document.getElementById("no_1").value;
number2 = document.getElementById("no_2").value;
actual_number = number1*number2;
question_number = "<h4>"+number1+"X"+number2+"<h4>"
inputbox = "<br>Answer:<input type='number' id='input_check'>" 
checkbutton = "<br><br><button onclick='no()'>Check</button>"
row = question_number + inputbox + checkbutton;
document.getElementById("output").innerHTML = row;
document.getElementById("no_1").value = "";
document.getElementById("no_2").value = ""; 
}
question_turn = "player1";
answer_turn = "player2";
document.getElementById("question_turn").innerHTML = "question_turn" + name1;
document.getElementById("answer_turn").innerHTML = "answer_turn" + name2;
function no(){
get_answer = document.getElementById("input_check").value;
if(get_answer == actual_number){
if(answer_turn == "player1"){
score1 = score1 + 1;
document.getElementById("player1score").innerHTML = score1;
}
else{
    score2 = score2 + 1;
document.getElementById("player2score").innerHTML = score2;
}
}
if(question_turn == "player1"){
    question_turn = "player2";
    document.getElementById("question_turn").innerHTML = "question_turn" + name2;
}
else{
    question_turn = "player1";
document.getElementById("question_turn").innerHTML = "question_turn" + name1;
}
if(answer_turn == "player1"){
    answer_turn = "player2";
    document.getElementById("answer_turn").innerHTML = "answer_turn" + name2;
}
else{
    answer_turn = "player1";
document.getElementById("answer_turn").innerHTML = "answer_turn" + name1;
}
}