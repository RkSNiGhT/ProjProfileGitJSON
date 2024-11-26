
function search(){

    var username = document.getElementById("inputUserName").value;
    var url = `https://api.github.com/users/${username}`;


    

    $.getJSON(url, (response) => {
        showUserData(response);
        document.getElementById("error").innerHTML = "";
    }).fail( () => {
        showUserData({});
        document.getElementById("error").innerHTML = "<div class='alert alert-danger mt-1' role='alert'>Não Encontrado! </div>";
    });

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