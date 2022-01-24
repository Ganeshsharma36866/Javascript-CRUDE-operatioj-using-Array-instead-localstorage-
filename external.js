var data = [];
var UID = 0;

document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault()
    var username = document.getElementById("Username").value;
    var firstname = document.getElementById("Firstname").value;
    var lastname = document.getElementById("Lastname").value;
    var email = document.getElementById("Email").value;
    var branch = document.getElementById("Branch").value;

    submitData(username, firstname, lastname, email, branch)
    document.getElementById("myForm").reset()
})

const readData = () => {
    let table = document.getElementById("table");
    let row = " "
    for (var i = 0; i < data.length; i++) {
        row += `<tr class="p-2">
             <td>${data[i].username} </td>
             <td>${data[i].firstname}</td>
             <td>${data[i].lastname}</td>
             <td>${data[i].email}</td>
             <td>${data[i].branch}</td>
             <td><input type="button" value="Edit" class="btn btn-warning" onclick=(editData(${i})) />
             <input type="button"  value="Delete" id="Delete" onclick="delet(${i})" class="btn btn-secondary"></td>            
           </tr>`

    }
    table.innerHTML = row
}

function submitData(username, firstname, lastname, email, branch) {
    data.push({ username, firstname, lastname, email, branch })
    readData()
}

const editData = (r) => {
    UID = r;
    console.log(r);
    document.getElementById("Username").value = data[UID].username;
    document.getElementById("Firstname").value = data[UID].firstname;
    document.getElementById("Lastname").value = data[UID].lastname;
    document.getElementById("Email").value = data[UID].email;
    document.getElementById("Branch").value = data[UID].branch;
    window = update1 = () => {
        var username1 = document.getElementById("Username").value;
        var firstname1 = document.getElementById("Firstname").value;
        var lastname1 = document.getElementById("Lastname").value;
        var email1 = document.getElementById("Email").value;
        var branch1 = document.getElementById("Branch").value;
        data[UID].username = username1;
        data[UID].firstname = firstname1;
        data[UID].lastname = lastname1;
        data[UID].email = email1;
        data[UID].branch = branch1;
        readData()
        document.getElementById("myForm").reset()
    }
}


function delet(t) {
    data.splice(t, 1);
    console.log(data)
    readData()
}