import message from './Message.module.css'

export const Message = (props) => {
    return (
        <div className={message.message}>
            <div className={message.avatar}>
                <img className={message.avatar}
                     src='https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg' alt='img'/>
            </div>
            <div className={message.name}>
                <h4 className={message.name}>{props.name}</h4>
            </div>
            <div className={message.body}>
                <p className={message.body}>{props.message}</p>
            </div>
        </div>
    )
}