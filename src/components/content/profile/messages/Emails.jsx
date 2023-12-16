import emails from './Emails.module.css'
import {Email} from "./message/Email";
import {NavLink} from "react-router-dom";

export const Emails = (props) => {

    return (
        <div className={emails.emails}>
            {props.emails.map((item) => (
                <NavLink to={'/messages/' + item.id} className={emails.emails}>
                    <Email name={item.name} messages={item.messages}/>
                </NavLink>
            ))}
        </div>
    )
}