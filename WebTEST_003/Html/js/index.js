let testUrl3 = "https://localhost:7271/User";
//let testUrl3 = "https://localhost:5000/User";

function outPutErr(err)
{
	document.getElementById("container_1").innerText = `Метод GET:\n\nОшибка: ${err}`;
	console.error("There was a problem with the fetch operation:", err)
	return;
}

function getTest()
{	
	let id = document.getElementById("userIdInp").value;
	
	if (id == "")
	{
		alert("Не введён Id");
		return;
	}

    fetch(`${testUrl3}/${id}`).then(resp => {
    if (!resp.ok)
    {
        throw new Error("Network response was not ok");
    }
    return resp.json();
    }).then(data => document.getElementById("container_1").innerText = `Метод GET:\n\nID = ${data.id}\nTitle = ${data.title}\nBody = ${data.body}`)
	.catch(error => outPutErr(error));
}

function getAllTest()
{
    fetch(testUrl3).then(resp => {
    if (!resp.ok)
    {
        throw new Error("Network response was not ok");
    }
    return resp.text();
    }).then(data => document.getElementById("container_1").innerText = `Метод GET:\n\n${data}`)
	.catch(error => outPutErr(error));
}

function postTest()
{
	let tempDat = {
        "title": "Filler0",
        "body": "Filler1"
    };

    let i = 1

    for (key in tempDat)
    {
        let temp = document.getElementsByClassName("inp_1")[i].value;

		if(temp == "")
		{
			alert(`Не введённо значение в поле ${key}`);
			return;
		}
            
		if(key == "userId")
		{
			temp *= 1;
		}
		tempDat[key] = temp;
		
        i++;
    }

    fetch(testUrl3, {
        method: "POST",
        headers:
        {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(tempDat)}).then(resp => resp.status).then(data => document.getElementById("container_1")
	.innerText = "Метод POST:\n\nСтатус: " + data).catch(error => console.error("Error:", error));
}

function putTest()
{
    let tempDat = {
		"id": -1,
        "title": "Filler2",
        "body": "Filler3"
    };

    let i = 0

    for (key in tempDat)
    {
        let temp = document.getElementsByClassName("inp_1")[i].value;
		
		if(temp == "")
		{
			alert(`Не введённо значение в поле ${key}`);
			return;
		}
		
		if(key == "userId")
		{
			temp = parseInt(temp);
		}
		tempDat[key] = temp;

        i++;
    }

    fetch(testUrl3, {
        method: "PUT",
        headers:
        {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(tempDat)}).then(resp => resp.status).then(data => document.getElementById("container_1")
		.innerText = "Метод PUT:\n\nСтатус: " + data).catch(error => console.error("Error:", error));
}

function deleteTest()
{
	let id = document.getElementById("userIdInp").value;
	
	if (id == "")
	{
		alert("Не введён Id");
		return;
	}
	
	fetch(`${testUrl3}/${id}`, {
        method: "DELETE"
      }).then(resp => {
            if (resp.ok)
            {
                document.getElementById("container_1").innerText = `Метод DELETE:\n\nСтатус: ${resp.status}`;
            }
            else
            {
                throw new Error("Failed to delete the post");
            }}).catch(error => console.error("Error:", error));
}