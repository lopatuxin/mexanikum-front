let store = {
    render() {
    },
    subscribe(observer) {
        this.render = observer;
    },
    _state: {
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
    },
    getState() {
        return this._state
    },
    addMessage() {
        let newMessage = {
            id: 9,
            message: this._state.messagesPage.messageText,
            name: 'Anton'
        }
        this._state.messagesPage.messageText = 'Hello'
        this._state.messagesPage.messages.push(newMessage)
        this.render(this._state)
    },
    updateMessageText(newText) {
        this._state.messagesPage.messageText = newText
        this.render(this._state)
    }
}

export default store