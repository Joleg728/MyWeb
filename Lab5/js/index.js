// let screenHeight = window.screen.height;
// let screenWidth = window.screen.width;

class Block
{
    headerText = "Жук";

    innerText = "Дыо - козёл";

    masterWidth = "1000px";//window.screen.width * 0.8 + "px";

    returnHtml()
    {
        let sectMain = document.createElement("section");
        sectMain.className = "sect_mid";
        sectMain.style.width = this.masterWidth;

        let pHead = document.createElement("h2");
        pHead.innerText = this.headerText;
        pHead.id = "header01";

        let pInner = document.createElement("p");
        pInner.innerText = this.innerText;
        pInner.className = "inner_type_01";
        pInner.id = "inner01";

        sectMain.appendChild(pHead);
        sectMain.appendChild(pInner);

        document.querySelector("body").appendChild(sectMain);

        return;
    }

    
}
class InfoBlock extends Block
{
    weight = "∞";
    imgSrc = "assets/img/def.png";
    sex = "Дед аутсайд";
    height = "-15";
    prof = "стрелы кидат руками";
    stand = "Вкусный";
    lighter = "Закопана";

    returnHtml()
    {
        let sectMain = document.createElement("section");
        sectMain.id = "head_sect"
        sectMain.className = "sect_head";
        sectMain.style.width = this.masterWidth;

        let pHead = document.createElement("h2");
        pHead.innerText = "Имя: " + this.headerText;
        pHead.className = "header_01";

        let pInner = document.createElement("p");
        pInner.innerText = "История: " + this.innerText;
        pInner.className = "inner_type_01";
        pInner.id = "inner01";

        let img = document.createElement("img");
        img.src = this.imgSrc;
        img.alt = "photo";
        img.className = "main_img";

        let pSubInner01 = document.createElement("p");
        pSubInner01.innerText = "Пол: " + this.sex;
        pSubInner01.className = "inner_type_02";

        let pSubInner02 = document.createElement("p");
        pSubInner02.innerText = "Вес: " + this.weight;
        pSubInner02.className = "inner_type_02";

        let pSubInner03 = document.createElement("p");
        pSubInner03.innerText = "Рост: " + this.height;
        pSubInner03.className = "inner_type_02";

        let sub02 = document.createElement("section");
        sub02.className = "sub_sect_02";
        sub02.appendChild(pSubInner01);
        sub02.appendChild(pSubInner02);
        sub02.appendChild(pSubInner03);

        let pSubInner04 = document.createElement("p");
        pSubInner04.innerText = "Профессия: " + this.prof;
        pSubInner04.className = "inner_type_02";

        let pSubInner05 = document.createElement("p");
        pSubInner05.innerText = "Злой дух: " + this.stand;
        pSubInner05.className = "inner_type_02";

        let pSubInner06 = document.createElement("p");
        pSubInner06.innerText = "Зажигалка: " + this.lighter;
        pSubInner06.className = "inner_type_02";

        let sub03 = document.createElement("section");
        sub03.className = "sub_sect_02";
        sub03.appendChild(pSubInner04);
        sub03.appendChild(pSubInner05);
        sub03.appendChild(pSubInner06);

        let sub01 = document.createElement("section");
        sub01.className = "sub_sect_01";
        sub01.appendChild(pHead);
        sub01.appendChild(pInner);
        sub01.appendChild(sub02);
        sub01.appendChild(sub03);

        sectMain.appendChild(sub01);
        sectMain.appendChild(img);

        document.querySelector("main").appendChild(sectMain);

        return;
    }
}
class BioBlock extends Block
{
    returnHtml()
    {
        let sectMain = document.createElement("section");
        sectMain.className = "sect_mid";
        sectMain.style.width = this.masterWidth;

        let pHead = document.createElement("h2");
        pHead.innerText = "Биография";
        // pHead.id = "header02";

        let pInner = document.createElement("p");
        pInner.innerText = this.innerText;
        pInner.className = "inner_type_01";
        pInner.id = "inner02";

        sectMain.appendChild(pHead);
        sectMain.appendChild(pInner);

        document.querySelector("main").appendChild(sectMain);

        return;
    }
}
class StatBlock extends Block
{
    power = "C";
    speed = "C";
    range = "C";
    durability = "C";
    precision = "C";
    potential = "C";

    returnHtml()
    {
        let sectMain = document.createElement("section");
        sectMain.className = "sect_mid";
        sectMain.style.width = this.masterWidth;

        let subSect01 = document.createElement("section");
        subSect01.style.display = "grid";
        subSect01.style.gridTemplateColumns = "1fr 1fr";

        let pHead = document.createElement("h2");
        pHead.innerText = "Характеристики";
        // pHead.id = "header02";

        sectMain.appendChild(pHead);

        let subSect02 = document.createElement("section");
        subSect02.className = "sub_sect_03";

        let subSect03 = document.createElement("section");
        subSect03.className = "sub_sect_03";

        let stat01 = document.createElement("p");
        stat01.innerText = "Сила: " + this.power;
        stat01.className = "inner_type_01";
        stat01.style.textAlign = "center";

        let stat02 = document.createElement("p");
        stat02.innerText = "Скорость: " + this.speed;
        stat02.className = "inner_type_01";
        stat02.style.textAlign = "center";

        let stat03 = document.createElement("p");
        stat03.innerText = "Дальность: " + this.range;
        stat03.className = "inner_type_01";
        stat03.style.textAlign = "center";

        let stat04 = document.createElement("p");
        stat04.innerText = "Защита: " + this.durability;
        stat04.className = "inner_type_01";
        stat04.style.textAlign = "center";

        let stat05 = document.createElement("p");
        stat05.innerText = "Точность: " + this.precision;
        stat05.className = "inner_type_01";
        stat05.style.textAlign = "center";

        let stat06 = document.createElement("p");
        stat06.innerText = "Потенциал: " + this.precision;
        stat06.className = "inner_type_01";
        stat06.style.textAlign = "center";

        subSect02.appendChild(stat01);
        subSect03.appendChild(stat02);
        subSect02.appendChild(stat03);
        subSect03.appendChild(stat04);
        subSect02.appendChild(stat05);
        subSect03.appendChild(stat06);
        
        subSect01.appendChild(subSect02);
        subSect01.appendChild(subSect03);
        sectMain.appendChild(subSect01);

        document.querySelector("main").appendChild(sectMain);

        return;
    }
}

let block01 = new InfoBlock;
block01.headerText = "Джотаро Токийский";
block01.innerText = "Ищет Джоске";
block01.imgSrc = "assets/img/xto.png";
block01.sex = "Пивной";
block01.weight = "120кг";
block01.height = "195см";
block01.prof = "Рыбнадзор";
block01.stand = "Рассосался";
block01.lighter = "Козырная";

let block02 = new BioBlock;
block02.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales tortor sed neque iaculis, vel egestas elit interdum. Vestibulum ultrices purus vitae diam eleifend, eget efficitur risus ullamcorper. Praesent nec tellus ligula. Aenean tempus ac dui id tristique. Vivamus ut velit a augue mattis eleifend. In convallis imperdiet eros sit amet convallis. Morbi ultricies sodales lorem, malesuada interdum dolor aliquam viverra. In ut erat et nulla placerat efficitur ut eu risus. In feugiat ac mi quis malesuada.\n"
+
"Nullam metus nisl, rhoncus nec aliquet in, sagittis in sapien. Aliquam mattis a velit vel interdum. Maecenas vulputate neque tempor cursus luctus. Curabitur blandit porta consequat. Donec nunc lacus, tempus sit amet eleifend ac, egestas ac arcu. Aliquam at semper ligula, ac gravida tortor. Cras pellentesque turpis non orci commodo tempus. Nulla convallis nulla sed ante lobortis, at molestie orci euismod. Nam diam felis, feugiat sit amet leo sed, volutpat dignissim mauris.";

let block03 = new StatBlock;
block03.power = "B";
block03.speed = "B";
block03.range = "D";
block03.durability = "B";
block03.precision = "B";
block03.potential = "C";

let blocksList = [block01, block02, block03];

function loadBodyMain()
{
    let mainHeader = document.createElement("header");

    let headerText = document.createElement("h1");

    let headerButton = document.createElement("img");
    headerButton.src = "assets/img/edit.jpg";
    headerButton.className = "header_button";
    headerButton.alt = "edit";
    headerButton.setAttribute("onclick","editMenu();");
    // headerButton.onclick = editMenu();

    headerText.innerText = "Лаб 5";
    // headerText.append(headerButton);
    
    mainHeader.append(headerText);

    document.querySelector("body").append(mainHeader);

    document.querySelector("header").appendChild(headerText);
    document.querySelector("header").appendChild(headerButton);

    // document.querySelector("body").append(document.createElement("aside"))

    document.querySelector("body").append(document.createElement("main"));

    blocksList.forEach(element => {
        element.returnHtml();
    });

    document.querySelector("body").append(document.createElement("footer"));
}

let editEnabled = false;

function editMenu()
{
    if(editEnabled)
    {
        return;

        // document.querySelector("aside").parentNode.removeChild(document.querySelector("aside"));

        // editEnabled = false;
    }
    
    sectList = document.getElementsByClassName("inner_type_01");

    let listLen = sectList.length;

    for (let i = 0; i < listLen; i++)
    {
        let origEl = sectList[0];
        let text = origEl.innerText;
        let origHeight = origEl.offsetHeight;

        let newEl = document.createElement("textarea");
        newEl.innerText = text;
        newEl.className = "textarea_changed";
        newEl.style.minHeight = origHeight + "px";            

        sectList[0].parentNode.replaceChild(newEl, origEl);
    }
    let asideBlock = document.createElement("aside");
    asideBlock.innerText = "Сохранить";
    asideBlock.setAttribute("onclick","exitEdit();");
    document.querySelector("body").append(asideBlock);

    editEnabled = true;
    
}
function exitEdit()
{
    if(!editEnabled)
        {
            return;
        }
        sectList = document.getElementsByClassName("textarea_changed");

        let listLen = sectList.length;
    
        for (let i = 0; i < listLen; i++)
        {
            let origEl = sectList[0];
            let text = origEl.value;
    
            let newEl = document.createElement("p");
            newEl.innerText = text;
            newEl.className = "inner_type_01";          
    
            sectList[0].parentNode.replaceChild(newEl, origEl);
        }
        let asideBlock = document.querySelector("aside");

        asideBlock.parentNode.removeChild(asideBlock);
    
        editEnabled = false;
}