function checkAll(toolbarCheckbox) {
    let checkboxes = document.querySelectorAll('.message__check');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = toolbarCheckbox.checked;
    }
}

function newMailIncoming() {
    let mails = document.getElementById("messages");
    let mail = document.createElement("div");
    mail.className = "message__create";
    mail.id = "created";
    mail.innerHTML = template;
    mails.insertBefore(mail, mails.firstChild);
    setTimeout(() => {
        let GC = document.getElementById("created");
        GC.classList.remove("message__create");
        GC.removeAttribute('id');
    }, 600);
}

function deleteMail() {
    let checkboxes = document.querySelectorAll('.message__check');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked === true) {
            let container = checkboxes[i].parentElement.parentElement.parentElement;
            container.classList.add("message__delete");
            setTimeout(() => {
                container.remove();
            }, 500);
        }
    }
}
