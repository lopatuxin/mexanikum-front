import messages from './Messages.module.css'
import {Message} from "./message/Message";
import {NavLink} from "react-router-dom";

export const Messages = () => {
    let dialogs = [
        {name : 'Антон Лопатухин', message : 'Привет'},
        {name : 'Владимир Лопатухин', message : 'Привет, как дела'},
        {name : 'Елена Лопатухина', message : 'Пока'},
        {name : 'Леля Лопатухина', message : 'Привет'},
        {name : 'Антон Лопатухин', message : 'Привет'}
    ]
    let dialog = dialogs.map(message =>
        <Message name={message.name} message={message.message}/>)
    return (
        <div className={messages.messages}>
            <NavLink to='/messages/1' className={messages.messages}>
                {dialog}
            </NavLink>
        </div>
    )
}