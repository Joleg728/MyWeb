async function getRandomCatImg()
{
    try
    {
    // let resp = await fetch("https://dog.ceo/api/breeds/image/random");
    let resp = await fetch("https://api.thecatapi.com/v1/images/search");
    // let aaa = await fetch("https://api.thecatapi.com/v1/images/search");

    if(!resp.ok)
    {
        alert("AAAAAA " + resp.status);
    }

    let cat = await resp.json();

        let catImg = document.createElement("img");
        // let sect = document.createElement("section");

        // sect.className = "cat_zone";

        // dogImg.src = dog.message;
        catImg.src = cat[0].url;
        catImg.className = "cat_img";
        catImg.id = "cat_img";
        catImg.style.width = "0px";
        catImg.style.height = "0px";
        catImg.alt = "cat_img";
        // alert(dog.message);
        // alert(dog[0].url);

        // sect.append(catImg);

        document.getElementById("cat_box").append(catImg);

        catImg.onload = function()
        {
            document.getElementById("load").style.display = "none";
            catImg.style.width = "";
            catImg.style.height = "";
            // alert("H");
        }
        catImg.onerror = function()
        {
            alert("Произошла ошибка при загрузке котика");
            
            document.getElementById("load").innerText = "Произошла ошибка";

            let errImg = document.getElementById("cat_img");

            errImg.parentNode.removeChild(errImg);
        }
        // alert(resp.status);
    }
    catch
    {
        alert("Произошла ошибка при получении котика");

        document.getElementById("load").innerText = "Произошла ошибка";
    }
}