function nextPage(){
    user1name = document.getElementById("input1").value;
    user2name = document.getElementById("input2").value;
    localStorage.setItem("username1", user1name);
    localStorage.setItem("username2", user2name);
    window.location = "gamepage.html";
}