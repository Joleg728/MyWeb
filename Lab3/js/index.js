function Still_Func()
{
    let Still_audio = document.getElementById("StillAudio");

    Still_audio.loop = true;

    return Still_audio.paused ? Still_audio.play() : Still_audio.pause();
}

function scout()
{
    let Scout_audio = document.getElementById("PopQuiz");

    Scout_audio.volume = 1;

    return Scout_audio.paused ? Scout_audio.play() : null;
}

function ugly()
{
    let MyUgly = document.getElementById("UglyAudio");

    MyUgly.volume = 0.2;

    return MyUgly.paused ? MyUgly.play() : null;
}

function false_alert()
{
    if(!false_audio.paused)
    {
        false_audio.pause();

        false_audio.currentTime = 0;
    }

    false_audio.play()

    alert("Неправильно, попробуй ещё раз");
}

let gong_audio = new Audio("assets/audio/gong.mp3");

let false_audio = document.getElementById("FalseAudio");
//let false_audio = new Audio("assets/audio/false.mp3");

function button_clck()
{
    let ans_0001 = "еслипузырьнарылопридавитьтонаверноеильвыпокажутсясильнее";

    let ans_0002_1 = "omaewamoushindeiru";
    let ans_0002_2 = "омаевамушиндеру";

    let ans_0003 = "седоймаленькийзелёный";

    while(true)
    {

        let text = prompt("Вопрос: кто сильнее? Солнце или триллион львов?");

        if (text === null)
        {
            break;
        }

        if (text.toLowerCase().replace(/\s+/g, '').replace(/[\p{P}\p{S}]/gu, "") == ans_0001)
        {
            alert("Правильно");
            break;
        }

        alert("Неправильно, попробуй ещё раз");
    }

    alert("Внимание, вопрос:");

    gong_audio.play();

    while(true)
    {
        let text = prompt("Что произнёс главный герой Kenshiro из аниме-сериала \"Hokuto no Ken\" " +
            "после нанесения своему противнику смертельной атаки?");

        if (text === null)
        {
            break;
        }

        text = text.toLowerCase().replace(/\s+/g, '').replace(/[\p{P}\p{S}]/gu, "");

        if (text == ans_0002_1 | text == ans_0002_2)
        {
            alert("Правильно");
            break;
        }

        alert("Неправильно, попробуй ещё раз");
    }

    while(true)
    {
            let result = confirm("Можешь называть меня Джотаро Токийский");
    
        if (!result)
        {
            alert("Ладно");
            break;
        }
        break;
    }

    while(true)
    {
        let text = prompt("Кто такой Микрозайм?");

        if (text === null)
        {
            break;
        }

        text = text.toLowerCase().replace(/\s+/g, '').replace(/[\p{P}\p{S}]/gu, "");

        if (text == ans_0003)
        {
            alert("Правильно");
            break;
        }

        alert("Неправильно, попробуй ещё раз");
    }

    while(true)
    {
        let result = confirm("Скажи код с обратной стороны карты");

        if (result)
        {
            alert("Глупец, твои деньги пойдут в фонд помощи безногим ветеранам франко-мафиозного сражения");
            alert("А номер карты какой?");
            break;
        }
        
    }

    return;
}