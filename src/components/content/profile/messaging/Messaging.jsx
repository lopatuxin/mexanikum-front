import messagingPage from './Messaging.module.css'
import React from "react";

export const Messaging = () => {
    let newMessage = React.createRef();
    let sendingMessage = () => {
        let text = newMessage.current.value;
        alert(text) }
    return (
        <div className={messagingPage.messagingPage}>
            <form className={messagingPage.messageForm}>
                <textarea ref={newMessage}></textarea>
                <button className={messagingPage.buttonSend} onClick={sendingMessage}>Отправить</button>
            </form>
        </div>
    )
}