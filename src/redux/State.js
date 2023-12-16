let store = {
    render() {
    },
    subscribe(observer) {
        this.render = observer;
    },
    _state: {
        messagesPage: {
            emails: [
                {id: 1, name: 'Антон Лопатухин', messages: 'Привет'},
                {id: 2, name: 'Владимир Лопатухин', messages: 'Привет, как дела'},
                {id: 3, name: 'Елена Лопатухина', messages: 'Пока'},
                {id: 4, name: 'Леля Лопатухина', messages: 'Привет'},
                {id: 5, name: 'Антон Лопатухин', messages: 'Привет'}
            ],
            messageText: ''
        }
    },
    getState() {
        return this._state
    },
    addMessage() {
        let newMessage = {
            id: 9,
            messages: this._state.messagesPage.messageText,
            name: 'Anton'
        }
        this._state.messagesPage.messageText = ''
        this._state.messagesPage.emails.push(newMessage)
        this.render(this._state)
    },
    updateMessageText(newText) {
        this._state.messagesPage.messageText = newText
        this.render(this._state)
    },
    dispatch(action) {
        if (action.type === "ADD-MESSAGE") {
            this.addMessage()
        } else if (action.type === "UPDATE-MESSAGE-TEXT") {
            this.updateMessageText(action.newText)
        }
    }
}

export const addMessageAction = () => ({type: "ADD-MESSAGE"})
export const updateMessageTextAction = (text) => ({
    type: "UPDATE-MESSAGE-TEXT",
    newText: text
})
export default store