import messages from './Messages.module.css'
import {Message} from "./message/Message";
import {NavLink} from "react-router-dom";

export const Messages = (props) => {

    let message = props.messages.map(message =>
        <NavLink to={'/messages/' + message.id} className={messages.messages}>
            <Message name={message.name} message={message.message}/>
        </NavLink>
    )
    return (
        <div className={messages.messages}>
            {message}
        </div>
    )
}