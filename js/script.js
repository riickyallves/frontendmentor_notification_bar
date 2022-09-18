const counter = document.getElementById("notifications-count")

function markAllAsRead() {
    let divs = document.getElementsByTagName("div")

    for (let i=0; i<divs.length; i++) {
        divs[i].classList.remove("unread")
    }

    counter.innerText = 0
}