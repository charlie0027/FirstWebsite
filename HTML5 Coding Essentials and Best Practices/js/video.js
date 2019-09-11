var myVid = document.getElementById("myVideo");
var pl = document.getElementById("pl");
var pr = document.getElementById("pr");
var seek = document.getElementById("slide");
var nx = document.getElementById("nx");
var volDown = document.getElementById("volDown");
var volUp = document.getElementById("volUp");
var vid1 = document.getElementById("vid1");
var vid2 = document.getElementById("vid2");
var sources = ["vid/vid.mp4","vid/vid2.mp4"];
var posters = ["img/img2.png","img/img3.png"];
var desc = document.getElementById("artVid");

var num = 0;
myVid.src = sources[num];
myVid.volume = 0.5;

// start playing
function cinema() {
    function playPause() {
        if (myVid.paused === true) {
            myVid.play();
            pl.innerHTML = "<strong>=</strong>";
        } else {
            myVid.pause();
            pl.innerHTML = "<strong>▶</strong>";
        }
    }

    function prevVid() {
        if (num === 0) {
            num = 0;
        } else {
            num--;
            seek.value = 0;
            myVid.src = sources[num];
            myVid.poster = posters[num];
            myVid.pause();
            if(num === 0){
                desc.innerHTML = "<h2>Marand Beach Resort and Spa</h2><p>This is the best swimming pool so far that I ever visited. This is also the time where my phone got destroyed because I put it under water thinking it was waterproof</p>";
            }
            else{
                desc.innerHTML = "<h2>Bomod-ok Falls</h2><p>This is the most majestic falls I saw. You can feel its waters splashing even though you are still far away</p>";
            }
        }
    }

    function vidSeek() {
        var vidTime = myVid.duration * (seek.value / 100);
        myVid.currentTime = vidTime;
    }

    function vidTime() {
        var nt = myVid.currentTime * (100 / myVid.duration);
        seek.value = nt;
    }

    function nextVid() {
        if (num === 1) {
            if (seek.value < 100) {
                num = 1;
            } else {
                num = 1;
                myVid.src = sources[num];
                myVid.poster = posters[num];
                seek.value = 0;
                myVid.pause();
                pl.innerHTML = "<strong>▶</strong>";    
            }
        } else {
            num++;
            seek.value = 0;
            myVid.src = sources[num];
            myVid.poster = posters[num];
            myVid.pause();
            pl.innerHTML = "<strong>▶</strong>";
            if(num === 0){
                desc.innerHTML = "<h2>Marand Beach Resort and Spa</h2><p>This is the best swimming pool so far that I ever visited. This is also the time where my phone got destroyed because I put it under water thinking it was waterproof</p>";
            }
            else{
                desc.innerHTML = "<h2>Bomod-ok Falls</h2><p>This is the most majestic falls I saw. You can feel its waters splashing even though you are still far away</p>";
            }
        }
    }

    function videoEnded(){
        seek.value = 0;
        myVid.src = sources[num];
        myVid.poster = posters[num];
        myVid.pause();
        pl.innerHTML = "<strong>↺</strong>";
        if(num === 0){
            desc.innerHTML = "<h2>Marand Beach Resort and Spa</h2><p>This is the best swimming pool so far that I ever visited. This is also the time where my phone got destroyed because I put it under water thinking it was waterproof</p>";
        }
        else{
            desc.innerHTML = "<h2>Bomod-ok Falls</h2><p>This is the most majestic falls I saw. You can feel its waters splashing even though you are still far away</p>";
        }
    }

    function volChangeDown() {
        if (myVid.volume > 0) {
            myVid.volume -= 0.1;
        }
    }

    function volChangeUp() {
        if (myVid.volume < 1) {
            myVid.volume += 0.1;
        }
    }

    function vidChoice1() {
        num = 0;
        myVid.src = sources[num];
        myVid.poster = posters[num];
        desc.innerHTML = "<h2>Marand Beach Resort and Spa</h2><p>This is the best swimming pool so far that I ever visited. This is also the time where my phone got destroyed because I put it under water thinking it was waterproof</p>";
        playPause();
    }

    function vidChoice2() {
        num = 1;
        myVid.src = sources[num];
        myVid.poster = posters[num];
        playPause();
        desc.innerHTML = "<h2>Bomod-ok Falls</h2><p>This is the most majestic falls I saw. You can feel its waters splashing even though you are still far away</p>";
    }

    // Add all event listeners
    pl.addEventListener("click", playPause, false);
    pr.addEventListener("click", prevVid, false);
    seek.addEventListener("mousedown", function () {
        myVid.pause();
        pl.innerHTML = "<strong>▶</strong>";
    });
    seek.addEventListener("mouseup", function () {
        myVid.play();
        pl.innerHTML = "<strong>=</strong>";
    });
    seek.addEventListener("input", vidSeek, false);
    myVid.addEventListener("timeupdate", vidTime, false);
    myVid.addEventListener("ended", videoEnded, false);
    nx.addEventListener("click", nextVid, false);
    volDown.addEventListener("mousedown", volChangeDown, false);
    volUp.addEventListener("mousedown", volChangeUp, false);
    vid1.addEventListener("click", vidChoice1);
    vid2.addEventListener("click", vidChoice2);
}

cinema();

