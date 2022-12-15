function addUser()
{
    player1=document.getElementById("player1NameInput").value;
    player2=document.getElementById("player2NameInput").value;
    localStorage.setItem("jogador1",player1);
    localStorage.setItem("jogador2",player2);
    window.location="game_page.html";
}