import messagingPage from './Messaging.module.css'
import React from "react";
import {addMessageAction, updateMessageTextAction} from "../../../../redux/State";

export const Messaging = (props) => {
    let newMessage = React.createRef();
    let sendingMessage = () => {
        props.dispatch(addMessageAction())
    }

    let onMessageChange = () => {
        let text = newMessage.current.value
        props.dispatch(updateMessageTextAction(text))
    }
    return (
        <div className={messagingPage.messagingPage}>
            <div className={messagingPage.messageForm}>
                <textarea onChange={onMessageChange} ref={newMessage} value={props.messageText}/>
                <button className={messagingPage.buttonSend} onClick={sendingMessage}>Отправить</button>
            </div>
        </div>
    )
}