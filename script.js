const not1 = document.querySelector('.not1')
const not2 = document.querySelector('.not2')
const not3 = document.querySelector('.not3')
const markAllRead = document.querySelector('#mark-all-read')
const notification__body = document.querySelector('.notification__body')

const notification__bubble = document.querySelector('.notification__bubble')

let unreadMessages = 3;

notification__bubble.innerText = unreadMessages

if (unreadMessages === 3) {
    not1.classList.add('unread')
    not3.classList.add('unread')
    not2.classList.add('unread')
}

let handleClick = (e) => {
    if (e.target.classList[0] === 'notification') {
        e.target.classList.remove('unread')
        unreadMessages -= 1
        notification__bubble.innerText = unreadMessages
        if (unreadMessages <= 0) {
            notification__bubble.style.display = 'none'
        }
    } else if (e.target.parentElement.parentElement.classList[0] === "notification") {
        e.target.parentElement.parentElement.classList.remove('unread')
        unreadMessages -= 1
        notification__bubble.innerText = unreadMessages
        if (unreadMessages <= 0) {
            notification__bubble.style.display = 'none'
        }

    } else {
        console.log('Select the right one')
    }

}

not1.addEventListener('click', handleClick)
not2.addEventListener('click', handleClick)
not3.addEventListener('click', handleClick)

markAllRead.addEventListener('click', () => {
    unreadMessages = 0
    notification__bubble.style.display = 'none'
    not1.classList.remove('unread')
    not3.classList.remove('unread')
    not2.classList.remove('unread')

})
