import {render} from "../render/RenderSite";

let state = {
    messagesPage : [
        {id : 1, name : 'Антон Лопатухин', message : 'Привет'},
        {id : 2, name : 'Владимир Лопатухин', message : 'Привет, как дела'},
        {id : 3, name : 'Елена Лопатухина', message : 'Пока'},
        {id : 4, name : 'Леля Лопатухина', message : 'Привет'},
        {id : 5, name : 'Антон Лопатухин', message : 'Привет'}
    ]
}

export let addMessage = (postMessage) => {
    let newMessage = {
        id: 9,
        message: postMessage,
        name : 'Anton'
    }
    state.messagesPage.push(newMessage)
    render(state)
}

export default state