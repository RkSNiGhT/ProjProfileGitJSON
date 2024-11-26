
let usershistory = [];

function search(){

    var username = document.getElementById("inputUserName").value;
    var url = `https://api.github.com/users/${username}`;


    

    $.getJSON(url, (response) => {
        showUserData(response);

        if(isnew(response)){
            save(response);
            newUserHistory(response);
        }

        document.getElementById("error").innerHTML = "";
    }).fail( () => {
        showUserData({});
        document.getElementById("error").innerHTML = "<div class='alert alert-danger mt-1' role='alert'>Não Encontrado! </div>";
    });

}

function isnew(response){
    return usershistory.filter((r) => r.login === response.login).length == 0;
}

function save(response){
    usershistory.push(response)
}

function newUserHistory(response){
    document.getElementById("history").innerHTML += `
    <div class="col">
      <img id="avatar_url" src=${response.avatar_url} height="110" width="110" class="shadow rounded">
    </div>
    `
}


function showUserData(user) {
    document.getElementById("name").innerHTML = user.name || "";
    document.getElementById("html_url").innerHTML = user.html_url || "";
    document.getElementById("company").innerHTML = user.company || "";

    document.getElementById("avatar_url").innerHTML = user.avatar_url ?
        `
            <img  src=${user.avatar_url} width="220" height="220" class="shadow rounded">
        ` :
        "";
}