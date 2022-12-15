player1=localStorage.getItem("jogador1");
player2=localStorage.getItem("jogador2");
jogador1_score=0;
jogador2_score=0;
document.getElementById("player1").innerHTML=player1+": ";
document.getElementById("player2").innerHTML=player2+": ";
document.getElementById("score1").innerHTML=jogador1_score;
document.getElementById("score1").innerHTML=jogador2_score;
document.getElementById("player_question").innerHTML="turno da pergunta- "+player1;
document.getElementById("player_answer").innerHTML="turno da resposta- "+player2;
function send()
{
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    charAt1=word.charAt(1);
    length_divide_2=Math.floor(word.length/2);
    charAt2=word.charAt(length_divide_2);
    length_minus_1=word.length-1;
    charAt3=word.charAt(length_minus_1);
    remove_charAt1=word.replace(charAt1, "_");
    remove_charAt2=remove_charAt1.replace(charAt2, "_");
    remove_charAt3=remove_charAt2.replace(charAt3, "_");
    question_word="<h4 id='word_displa'>P."+remove_charAt3+"</h4>";
    input_box="<br>Resposta:<input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn_info' onclick='check()'>Checar</button>";
    row=question_word+input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
questionturn="player1";
answerturn="player2";
function check()
{
    getAnswer=document.getElementById("input_check_box").value;
answer=getAnswer.toLowerCase();
if(answer==word)
{
    if(answerturn=="player1")
    {
        jogador1_score=jogador1_score+1;
        document.getElementById("score1").innerHTML=jogador1_score;

    }
    else
    {
        jogador2_score=jogador2_score+1;
        document.getElementById("score2").innerHTML=jogador2_score; 
    }
}
if(questionturn=="player1")
{
    questionturn="player2";
    document.getElementById("player_question").innerHTML="turno da pergunta: " +player2;
}
else
{
    questionturn="player1";
    document.getElementById("player_question").innerHTML="turno da pergunta: " +player1;
}
if(answerturn=="player1")
{
    answerturn="player2"
    document.getElementById("player_answer").innerHTML="tueno da resposta:"+player2;
}
else
{
    answerturn="player1"
    document.getElementById("player_answer").innerHTML="tueno da resposta:"+player1;
}
document.getElementById("output").innerHTML="";
}