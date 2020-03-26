




function init(){
    let username = document.getElementsByClassName("userName");
    let comment = document.getElementById("userComment");
    let commentSection = document.getElementsByClassName("seccionComments");
    let button = document.getElementById("submit");
    button.addEventListener('click',(event)=>{
        if(username[0].textContent!=="" && comment.textContent!== ""){
            commentSection[0].innerHTML += '<div><h3>${username[0].textContent}</h3><p>${comment.TextContent}</p><input type=submit id="remove"/></div>';
            comment.textContent="";
            username.textContent=""; 
        }
    })
}

init();