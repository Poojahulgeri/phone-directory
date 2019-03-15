var contacts = [];

function handleAddButtonClick(){
document.getElementsByClassName("form")[0].style.display = "block";
document.getElementsByClassName("add-button")[0].style.display = "none";
document.getElementsByClassName("back")[0].style.display = "block";
document.getElementsByClassName("heading")[0].innerText = "ADD SUBSCRIBER";
document.getElementsByClassName('contact-table')[0].innerHTML = ""

}

function handleBackButtonClick() {
    document.getElementsByClassName("back")[0].style.display = "none";
    document.getElementsByClassName("form")[0].style.display = "none";
    document.getElementsByClassName("add-button")[0].style.display = "block";
    document.getElementsByClassName("heading")[0].innerText = " PHONE DIRECTORY"
    document.getElementsByClassName('contact-table')[0].innerHTML = ""
    showContactTable();
}

function addContact(){
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    contacts.push({
        name:name,
        number:number
    });
    handleBackButtonClick();
}

function deleteContacts(id) {
    document.getElementById(id).remove();
}

function showContactTable(){
    const firstHalfOftable = `<table class="table">
    <th>Name</th>
    <th>Number</th>`;
    var rows = "";
    for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];
    const row  = `<tr id=${index}>
    <td>${contact.name}</td>
    <td>${contact.number}</td>
    <td><button class="delete" onclick="deleteContacts(${index})">DELETE</button></td>
    </tr>`;
    rows+=row;
    }

    var secondHalf = `</table>`;
    var table = firstHalfOftable+rows+secondHalf;
    document.getElementsByClassName('contact-table')[0].innerHTML = table;
}