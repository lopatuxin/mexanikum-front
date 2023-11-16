import messages from './Messages.module.css'
import {NavLink} from "react-router-dom";

export const Messages = () => {
    return (
        <div className={messages.messages}>
            <NavLink to='/messages/1' className={messages.message}>
                <div className={messages.avatar}>
                    <img className={messages.avatar}
                         src='https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg' alt='img'/>
                </div>
                <div className={messages.name}>
                    <h4 className={messages.name}>Антон Лопатухин</h4>
                </div>
                <div className={messages.body}>
                    <p className={messages.body}>Тело</p>
                </div>
            </NavLink>
            <NavLink to='/messages/2' className={messages.message}>
                <div className={messages.avatar}>
                    <img className={messages.avatar}
                         src='https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg' alt='img'/>
                </div>
                <div className={messages.name}>
                    <h4 className={messages.name}>Антон Лопатухин</h4>
                </div>
                <div className={messages.body}>
                    <p className={messages.body}>Тело</p>
                </div>
            </NavLink>
        </div>
    )
}