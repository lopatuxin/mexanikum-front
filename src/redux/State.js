let render = () => {}

let state = {
    messagesPage: {
        messages: [
            {id: 1, name: 'Антон Лопатухин', message: 'Привет'},
            {id: 2, name: 'Владимир Лопатухин', message: 'Привет, как дела'},
            {id: 3, name: 'Елена Лопатухина', message: 'Пока'},
            {id: 4, name: 'Леля Лопатухина', message: 'Привет'},
            {id: 5, name: 'Антон Лопатухин', message: 'Привет'}
        ],
        messageText: 'Hello'
    }
}
window.state = state
export const addMessage = () => {
    debugger
    let newMessage = {
        id: 9,
        message: state.messagesPage.messageText,
        name: 'Anton'
    }
    state.messagesPage.messageText = 'Hello'
    state.messagesPage.messages.push(newMessage)
    render(state)
}

export const updateMessageText = (newText) => {
    state.messagesPage.messageText = newText
    render(state)
}

export const subscribe = (observer) => {
    render = observer;
}

export default state