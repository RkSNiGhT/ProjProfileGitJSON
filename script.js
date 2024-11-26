
function search(){

    var username = document.getElementById("inputUserName").value;
    var url = `https://api.github.com/users/${username}`;


    

    $.getJSON(url, (response) => {
        document.getElementById("name").innerHTML       =response.name;
        document.getElementById("html_url").innerHTML   =response.html_url;
        document.getElementById("company").innerHTML    =response.company;
        document.getElementById("avatar_url").innerHTML = `
            <img src=${response.avatar_url} height="220" width="220" class="shadow rounded">
        `
    });

}