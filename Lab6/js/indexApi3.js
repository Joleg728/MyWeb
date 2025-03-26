let textUrl = "https://jsonplaceholder.typicode.com/posts";

function getTest()
{
    // let resp;

    // try
    // {
    //     resp = await fetch(textUrl);
    
    //     if (!resp.ok)
    //     {
    //         throw new Error("Network response was not ok");
    //     }

    //     result = await resp.text();
    
    //     // alert(result);

    //     document.getElementById("container_1").innerText = result;
    // }
    // catch
    // {
    //     alert("There was a problem with the fetch operation: " + resp.status);
    // }

    fetch(textUrl).then(resp => {
    if (!resp.ok)
    {
        throw new Error("Network response was not ok");
    }
    return resp.text();
    }).then(data => document.getElementById("container_1").innerText = "Метод GET:\n\n" + data).catch(error => console.error("There was a problem with the fetch operation:", error));
}

function postTest()
{
    fetch(textUrl, {
        method: "POST",
        headers:
        {
          "Content-Type": "application/json"
        },
        body: JSON.stringify
        ({
            userId: 1,
            id: 3,
            title: "foo",
            body: "bar",
        })}).then(resp => resp.text()).then(data => document.getElementById("container_1").innerText = "Метод POST:\n\n" + data).catch(error => console.error("Error:", error));

    // let resp;

    // try
    // {
    //     resp = await fetch(textUrl, {
    //         method: "POST",
    //         headers:
    //         {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(
    //         {
    //             userId: 11,
    //             id: 101,
    //             title: "foo",
    //             body: "bar"
    //         }) });
    
    //         result = await resp.text();
    
    //         // alert(result);

    //         document.getElementById("container_1").innerText = result;
    // }
    // catch
    // {
    //     alert("There was a problem with the fetch operation: " + resp.status);
    // }
}

function putText()
{
    fetch(textUrl + "/1", {
        method: "PUT",
        headers:
        {
          "Content-Type": "application/json"
        },
        body: JSON.stringify
        ({
            userId: 1,
            id: 1,
            title: "updated title",
            body: "updated body"
        })
      }).then(resp => resp.text()).then(data => document.getElementById("container_1").innerText = "Метод PUT:\n\n" + data).catch(error => console.error("Error:", error));
}

function patchText()
{
    fetch(textUrl + "/1", {
        method: "PATCH",
        headers:
        {
          "Content-Type": "application/json"
        },
        body: JSON.stringify
        ({
            body: "updated patched body"
        })
      }).then(resp => resp.text()).then(data => document.getElementById("container_1").innerText = "Метод PATCH:\n\n" + data).catch(error => console.error("Error:", error));
}

function deleteText()
{
    fetch(textUrl + "/1", {
        method: "DELETE"
      }).then(resp => {
            if (resp.ok)
            {
                document.getElementById("container_1").innerText = "Метод DELETE:\n\n" + "Post deleted successfully";
            }
            else
            {
                throw new Error("Failed to delete the post");
            }}).catch(error => console.error("Error:", error));
}