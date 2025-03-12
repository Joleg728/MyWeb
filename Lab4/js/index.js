const rew01 = {name: "SoupCan Pyro",
    text: "Я просто в восторге от Tiny Desk Engineer! Несмотря на его маленький размер и кажущуюся бесполезность, он приносит уникальную атмосферу.\nДа, он дорогой, но его харизма и забавность стоят каждой монеты!",
    rate: 5,
    imgSrc: "assets/img/soupcan.jpg"};

const rew02 = {name: "☟︎♏︎♋︎❖︎⍓︎❄︎☞︎📄︎",
    text: "👌︎◆︎⧫︎ ⧫︎♒︎♏︎ ♓︎❍︎◻︎●︎♏︎❍︎♏︎■︎⧫︎♋︎⧫︎♓︎□︎■︎ □︎♐︎ ❍︎□︎♎︎♏︎❒︎■︎ ❍︎♏︎⧫︎♒︎□︎♎︎⬧︎ ◻︎●︎♋︎⍓︎⬧︎ ♋︎ ♎︎♏︎♍︎♓︎⬧︎♓︎❖︎♏︎ ❒︎□︎●︎♏︎ ♓︎■︎ ♓︎■︎■︎□︎❖︎♋︎⧫︎♓︎❖︎♏︎ ❍︎♏︎⧫︎♒︎□︎♎︎⬧︎ □︎♐︎ ◻︎❒︎□︎♍︎♏︎ ⬧︎⬧︎ ❍︎♋︎■︎♋︎♑︎♏︎❍︎♏︎■︎⧫︎📬︎",
    rate: 4,
    imgSrc: "assets/img/heavy.jpg"};

const rew03 = {name: "ウィーブースパイ",
    text: "同様に、一部の反対派の信念は、開発モデルを分析することを求めています。現代の世界では、 組織の確立された構造が、進歩的な発展の方向性の準備と実施に貢献しています。",
    rate: 4.5,
    imgSrc: "assets/img/spy.jpg"};
let custom_rew01 = {name: "",
                    text: "",
                    rate: null,
                    imgSrc: "assets/img/ghostly_gibus.png"};

let rewsArray = [rew01, rew02, rew03];


let ReviewsNode = document.querySelector("#Reviews");

function rangeChange()
{
    let value = document.getElementById("range_id_001").value;
    document.getElementById("range_val_001").innerText = value + "☆";
}
function rangeChangeFilt()
{
    let value = document.getElementById("range_id_002").value;
    document.getElementById("range_val_002").innerText = value + "☆";

    if(fltrOnOffState)
    {
        let fltrRate = document.getElementById("range_id_002").value;

        delAllRews(fltrdNumb)

        fltrdNumb = 0;

        rewsArray.forEach(element => {
            if (element.rate == fltrRate)
            {
                oneRewLoad(element);
                fltrdNumb++;
            }
        });
    }
}

let fltrOnOffState = false

let fltrdNumb = 0;

function fltrOnOff()
{
    let button = document.getElementById("fltr_btn");

    let fltrRate = document.getElementById("range_id_002").value;

    if (fltrOnOffState == false)
    {
        button.innerText = "Выкл";

        delAllRews(rewsArray.length)

        rewsArray.forEach(element => {
            if (element.rate == fltrRate)
            {
                oneRewLoad(element);
                fltrdNumb++;
            }
        });

        fltrOnOffState = true;
    } 
    else
    {
        delAllRews(fltrdNumb)
            
        fltrdNumb = 0;

        button.innerText = "Вкл";

        let tempRews = rewsArray.slice(0);

        if (lastButton == "good")
        {
            tempRews = tempRews.sort((a, b) => - a.rate + b.rate)
        }
        else if (lastButton == "bad")
        {
            tempRews = tempRews.sort((a, b) => a.rate - b.rate)
        }

        reviewsLoad(tempRews);

        fltrOnOffState = false;


    }
}

function oneRewLoad(element)
{
    let sect001 = document.createElement("section");
    sect001.className = "rew_subblock_1";
    sect001.id = "REW";

    let sect002 = document.createElement("section");
    sect002.className = "rew_subblock_2";

    let domImg001 = document.createElement("img");
    domImg001.src = element.imgSrc;
    domImg001.className = "rew_ico_1";
    domImg001.alt = "Ico"

    let p001 = document.createElement("p");
    p001.className = "rew_name_1";
    p001.innerText = element.name;

    let p002 = document.createElement("p");
    p002.className = "rew_text_1";
    p002.innerText = element.text;

    let p003 = document.createElement("p");
    p003.className = "rate_text_01";
    p003.innerText = element.rate + "☆";

    let sect003 = document.createElement("section");
    
    sect003.className = "rate_block_01";

    //sect002.textContent = element.name;

    sect003.appendChild(p003);

    //sect001.textContent = element.name;
    sect002.appendChild(domImg001);
    sect002.appendChild(p001);
    
    sect001.appendChild(sect002);
    sect001.appendChild(p002);
    sect001.appendChild(sect003);

    ReviewsNode.appendChild(sect001);
}

function reviewsLoad( rew_mass )
{
    rew_mass.forEach(element => {
        let sect001 = document.createElement("section");
        sect001.className = "rew_subblock_1";
        sect001.id = "REW";

        let sect002 = document.createElement("section");
        sect002.className = "rew_subblock_2";

        let domImg001 = document.createElement("img");
        domImg001.src = element.imgSrc;
        domImg001.className = "rew_ico_1";
        domImg001.alt = "Ico"

        let p001 = document.createElement("p");
        p001.className = "rew_name_1";
        p001.innerText = element.name;

        let p002 = document.createElement("p");
        p002.className = "rew_text_1";
        p002.innerText = element.text;

        let p003 = document.createElement("p");
        p003.className = "rate_text_01";
        p003.innerText = element.rate + "☆";

        let sect003 = document.createElement("section");
        
        sect003.className = "rate_block_01";

        //sect002.textContent = element.name;

        sect003.appendChild(p003);

        //sect001.textContent = element.name;
        sect002.appendChild(domImg001);
        sect002.appendChild(p001);
        
        sect001.appendChild(sect002);
        sect001.appendChild(p002);
        sect001.appendChild(sect003);

        ReviewsNode.appendChild(sect001);

    });
}

function customReviewLoad()
{
    let len = rewsArray.length - 1;

    let sect001 = document.createElement("section");
    sect001.className = "rew_subblock_1";
    sect001.id = "REW";

    let sect002 = document.createElement("section");
    sect002.className = "rew_subblock_2";

    let domImg001 = document.createElement("img");
    //domImg001.src = custom_rew01.imgSrc;
    domImg001.src = rewsArray[len].imgSrc;
    domImg001.className = "rew_ico_1";
    domImg001.alt = "Ico"

    let p001 = document.createElement("p");
    p001.className = "rew_name_1";
    //p001.innerText = custom_rew01.name;
    p001.innerText = rewsArray[len].name;

    let p002 = document.createElement("p");
    p002.className = "rew_text_1";
    //p002.innerText = custom_rew01.text;
    p002.innerText = rewsArray[len].text;

    let p003 = document.createElement("p");
    p003.className = "rate_text_01";
    p003.innerText = rewsArray[len].rate + "☆";

    let sect003 = document.createElement("section");
        
    sect003.className = "rate_block_01";

    sect003.appendChild(p003);

    sect002.appendChild(domImg001);
    sect002.appendChild(p001);
    
    sect001.appendChild(sect002);
    sect001.appendChild(p002);
    sect001.appendChild(sect003);

    ReviewsNode.appendChild(sect001);
}

function createRew()
{
    if (custom_rew01.name != "")
    {
        return;
    }

    let nameText = document.getElementById("rew_name_text").value;

    let rewText = document.getElementById("rew_main_text").value;

    let rate01 = document.getElementById("range_id_001").value;

    if (nameText == "" | rewText == "")
    {
        alert("Отзыв пуст");
    }
    else
    {
        custom_rew01.name = nameText;
        custom_rew01.text = rewText;
        custom_rew01.rate = rate01;
        rewsArray.push(custom_rew01);
        if(!fltrOnOffState && lastButton == "none")
        {
            customReviewLoad();
            lastRewsNumb = rewsArray.length;
        }
    }
}

let themeCheck = false;

function themeChange()
{
    const bodyNode = document.querySelector("body");

    const asideNode = document.querySelector(".aside_type_1");

    const navNode = document.querySelectorAll(".header_type_2");

    const rewNode = document.querySelector(".rew_1");

    const rewTitleNode = document.querySelector(".rew_block_1");

    const headerType_1_Node = document.querySelector(".header_type_1");

    const articleType_1_Node = document.querySelector(".article_type_1");

    const mainType_1_Node = document.querySelector(".main_type_1");

    const mainType_2_Node = document.querySelector(".main_type_2");

    const footerNode = document.querySelector("footer");

    const themeNode = document.querySelector(".theme_type_1");

    if(!themeCheck)
    {
        bodyNode.style.backgroundColor = "#1a1a1a";
        asideNode.style.backgroundColor = "#2d2d2d";
        asideNode.style.color = "white";

        navNode.forEach(element => {
            element.style.backgroundColor = "#5e5e5e";
            element.style.color = "white";
        });

        themeNode.style.backgroundColor = "#5e5e5e";

        rewNode.style.backgroundColor = "#2d2d2d";
        rewTitleNode.style.color = "white";

        headerType_1_Node.style.backgroundColor = "#8c4412";

        articleType_1_Node.style.backgroundColor = "#8c4412";

        mainType_1_Node.style.backgroundColor = "#825c00";

        mainType_2_Node.style.backgroundColor = "#825c00";

        footerNode.style.backgroundColor = "#2d2d2d";

        themeCheck = true;
    }
    else
    {
        bodyNode.style.backgroundColor = "#b8b8b8";
        asideNode.style.backgroundColor = "#ffffff";
        asideNode.style.color = "black";
        navNode.forEach(element => {
            element.style.backgroundColor = "#ffffff";
            element.style.color = "black";
        });

        themeNode.style.backgroundColor = "#d8d8d8";

        rewNode.style.backgroundColor = "#ffffff";
        rewTitleNode.style.color = "black";

        headerType_1_Node.style.backgroundColor = "#ff7f27";

        articleType_1_Node.style.backgroundColor = "#ff7f27";

        mainType_1_Node.style.backgroundColor = "#FFB401";

        mainType_2_Node.style.backgroundColor = "#FFB401";

        footerNode.style.backgroundColor = "#ffffff";

        themeCheck = false;
    }
}

let lastButton = "none";

let lastRewsNumb = rewsArray.length;

function sortGood()
{
    //alert(fltrOnOffState);

    if (lastButton == "good" || fltrOnOffState)
    {
        return;
    }

    delAllRews(lastRewsNumb);

    lastRewsNumb = 0;

    let sort_rews_array = rewsArray.slice(0);
    
    sort_rews_array = sort_rews_array.sort((a, b) => - a.rate + b.rate)

    sort_rews_array.forEach(element => {
        oneRewLoad(element);
        lastRewsNumb++;
    });

    lastButton = "good";
}

function sortBad()
{
    if (lastButton == "bad" || fltrOnOffState)
        {
            return;
        }
    
        delAllRews(lastRewsNumb);

        lastRewsNumb = 0;
    
        let sort_rews_array = rewsArray.slice(0);
        sort_rews_array = sort_rews_array.sort((a, b) => a.rate - b.rate)
    
        sort_rews_array.forEach(element => {
            oneRewLoad(element);
            lastRewsNumb++;
        });
    
        lastButton = "bad";
}

function sortNone()
{
    if (lastButton == "none" || fltrOnOffState)
        {
            return;
        }
    
        delAllRews(lastRewsNumb);

        lastRewsNumb = rewsArray.length;
    
        rewsArray.forEach(element => {
            oneRewLoad(element);
        });
    
        lastButton = "none";
}

function delAllRews( count )
{
    for (let i = 0; i < count; i++)
        {
            var el = document.getElementById("REW");
            el.remove();
        }
}

function readURL()
{
    let file01 = document.getElementById('img_inp');

    const flrd = new FileReader();

    flrd.readAsDataURL(file01.files[0]);

    flrd.addEventListener('load', () => {

        const url = flrd.result;
        
        const img = new Image();

        custom_rew01.imgSrc = url;

    });
}