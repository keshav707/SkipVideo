let btn = document.querySelector(".Skip");

btn.addEventListener('click' , () => {

    var video1 = document.getElementById("Song1");
    video1.style.display = "none";
    video1.muted = true;

    var video2 = document.getElementById("Song2");
    video2.style.visibility = "visible";
    video2.autoplay = true;
    video2.load();
})