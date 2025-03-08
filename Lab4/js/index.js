const rew01 = {name: "SoupCan Pyro",
    text: "Я просто в восторге от Tiny Desk Engineer! Несмотря на его маленький размер и кажущуюся бесполезность, он приносит уникальную атмосферу.\nДа, он дорогой, но его харизма и забавность стоят каждой монеты!",
    rate: 5,
    img_src: "assets/img/soupcan.jpg"};

const rew02 = {name: "☟︎♏︎♋︎❖︎⍓︎❄︎☞︎📄︎",
    text: "👌︎◆︎⧫︎ ⧫︎♒︎♏︎ ♓︎❍︎◻︎●︎♏︎❍︎♏︎■︎⧫︎♋︎⧫︎♓︎□︎■︎ □︎♐︎ ❍︎□︎♎︎♏︎❒︎■︎ ❍︎♏︎⧫︎♒︎□︎♎︎⬧︎ ◻︎●︎♋︎⍓︎⬧︎ ♋︎ ♎︎♏︎♍︎♓︎⬧︎♓︎❖︎♏︎ ❒︎□︎●︎♏︎ ♓︎■︎ ♓︎■︎■︎□︎❖︎♋︎⧫︎♓︎❖︎♏︎ ❍︎♏︎⧫︎♒︎□︎♎︎⬧︎ □︎♐︎ ◻︎❒︎□︎♍︎♏︎ ⬧︎⬧︎ ❍︎♋︎■︎♋︎♑︎♏︎❍︎♏︎■︎⧫︎📬︎",
    rate: 4,
    img_src: "assets/img/heavy.jpg"};

const rew03 = {name: "ウィーブースパイ",
    text: "同様に、一部の反対派の信念は、開発モデルを分析することを求めています。現代の世界では、 組織の確立された構造が、進歩的な発展の方向性の準備と実施に貢献しています。",
    rate: 4.5,
    img_src: "assets/img/spy.jpg"};
let custom_rew01 = {name: "",
                    text: "",
                    rate: null,
                    img_src: "assets/img/ghostly_gibus.png"};

let rews_array = [rew01, rew02, rew03];


let ReviewsNode = document.querySelector("#Reviews");

//window.onload = reviews_load();

//const load_func = 

function range_change()
{
    let value = document.getElementById("range_id_001").value;
    //alert(value);
    document.getElementById("range_val_001").innerText = value + "☆";
}

function reviews_load()
{
    //alert("aaaaaaaaaaa");

    rews_array.forEach(element => {
        let sect001 = document.createElement("section");
        sect001.className = "rew_subblock_1";

        let sect002 = document.createElement("section");
        sect002.className = "rew_subblock_2";

        let DOM_img001 = document.createElement("img");
        DOM_img001.src = element.img_src;
        DOM_img001.className = "rew_ico_1";

        let p001 = document.createElement("p");
        p001.className = "rew_name_1";
        p001.innerText = element.name;

        let p002 = document.createElement("p");
        p002.className = "rew_text_1";
        p002.innerText = element.text;

        //sect002.textContent = element.name;

        //sect001.textContent = element.name;
        sect002.appendChild(DOM_img001);
        sect002.appendChild(p001);
        
        sect001.appendChild(sect002);
        sect001.appendChild(p002);

        ReviewsNode.appendChild(sect001);

    });

    //alert("s");
}

async function openFilePicker()
{
    let name = "Say my name";

    let value = "Heisenberg";

    document.cookie = "Saymyname=Heisenberg;";

    try
    {
        const [fileHandle] = await window.showOpenFilePicker(); // Мы далеко отстали от старомодных файловых менеджеров
    }
    catch (error)
    { // Будьте готовы к неожиданностям и возможным ошибкам пользователей
        alert("ААААААААААААА ОШИБКА СТОП 0000000000000000000000000000000000000000000000000000");
    }

    //const type = file.type.replace(/\/.+/, '')

    //const fileData = await fileHandle.getFile();

    //if ( )

    alert(fileHandle);

    //alert(document.cookie);
}

function custom_review_load()
{
    let sect001 = document.createElement("section");
    sect001.className = "rew_subblock_1";

    let sect002 = document.createElement("section");
    sect002.className = "rew_subblock_2";

    let DOM_img001 = document.createElement("img");
    DOM_img001.src = custom_rew01.img_src;
    DOM_img001.className = "rew_ico_1";

    let p001 = document.createElement("p");
    p001.className = "rew_name_1";
    p001.innerText = custom_rew01.name;

    let p002 = document.createElement("p");
    p002.className = "rew_text_1";
    p002.innerText = custom_rew01.text;

    //sect002.textContent = element.name;

    //sect001.textContent = element.name;
    sect002.appendChild(DOM_img001);
    sect002.appendChild(p001);
    
    sect001.appendChild(sect002);
    sect001.appendChild(p002);

    ReviewsNode.appendChild(sect001);
}

function create_rew()
{
    if (custom_rew01.name != "")
    {
        return;
    }

    let name_text = document.getElementById("rew_name_text").value;

    let rew_text = document.getElementById("rew_main_text").value;

    let rate_01 = document.getElementById("range_id_001").value;

    if (name_text == "" | rew_text == "")
    {
        alert("Отзыв пуст");
    }
    else
    {
        custom_rew01.name = name_text;
        custom_rew01.text = rew_text;
        custom_rew01.rate = rate_01;
        custom_review_load();
    }

    //alert(name_text + rew_text + rate_01);
}

let theme_check = false;

function theme_change()
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

    if(!theme_check)
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

        theme_check = true;
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

        theme_check = false;
    }
}