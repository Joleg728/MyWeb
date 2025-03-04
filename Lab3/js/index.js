
/*MyUgly.volume = 0.1;

MyUgly.loop = true*/

function myFunc()
{
    var Still_audio = document.getElementById("StillAudio");

    Still_audio.loop = true;

    //const sound = new Audio("assets/audio/Still Alive.mp3");

    //sound.play();

    //sound.loop = true;

    return Still_audio.paused ? Still_audio.play() : Still_audio.pause();
}

function ugly()
{
    var MyUgly = document.getElementById("UglyAudio");

    MyUgly.volume = 0.1;

    MyUgly.loop = true;

    /*const ug_ly = new Audio("assets/audio/ugly.mp3");

    ug_ly.volume = 0.1;

    ug_ly.loop = true;*/

    return MyUgly.paused ? MyUgly.play() : MyUgly.pause();

    //ug_ly.play();
}