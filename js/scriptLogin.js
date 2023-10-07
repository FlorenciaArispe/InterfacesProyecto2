document.getElementById("open-popup-btn").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementsByClassName("popup")[0].classList.add("active");
});

document.getElementById("dismiss-pop").addEventListener("click", function(event){
    event.preventDefault();
    window.location.href="home.html";
});
