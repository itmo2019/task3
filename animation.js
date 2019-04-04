let letter_num = 6;
let check_name = "check_mark";
let mail_name = "mail";
let content = "content";

let chosen_for_del = new Set();

for (let i = 1; i < letter_num; i++) {
    let element = document.getElementById(check_name + i).onclick = function () {
        if (chosen_for_del.has(i)) {
            chosen_for_del.delete(i);
            this.style.background = "#ffffff";
        } else {
            chosen_for_del.add(i);
            this.style.background = "#666666";
        }
    };
}

function delete_mail (i) {
    document.getElementById(content + i).classList.add("hide");
    setTimeout(function (){
        document.getElementById(content + i).remove()
    }, 900);
}

let remove = document.getElementById("remove").onclick = function () {
    if (chosen_for_del.size > 0) {
        chosen_for_del.forEach(mail_num => delete_mail(mail_num));
        chosen_for_del.clear();
    }
}

let create = document.getElementById("create").onclick = function () {
    document.getElementById(content + 5).classList.remove("hide");
    document.getElementById("create").remove();
}