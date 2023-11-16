import messages from './Messages.module.css'

export const Messages = () => {
    return (
        <div className={messages.messages}>
            <div className={messages.message}>
                <div className={messages.avatar}>
                    <img className={messages.avatar}
                         src='https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'/>
                </div>
                <div className={messages.name}>
                    <h4 className={messages.name}>Антон Лопатухин</h4>
                </div>
                <div className={messages.body}>
                    <p className={messages.body}>Тело</p>
                </div>
            </div>
            <div className={messages.message}>
                <div className={messages.avatar}>
                    <img className={messages.avatar}
                         src='https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'/>
                </div>
                <div className={messages.name}>
                    <h4 className={messages.name}>Антон Лопатухин</h4>
                </div>
                <div className={messages.body}>
                    <p className={messages.body}>Тело</p>
                </div>
            </div>
        </div>
    )
}