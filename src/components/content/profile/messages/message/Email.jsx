import email from './Email.module.css'

export const Email = (props) => {
    return (
        <div className={email.email}>
            <div className={email.avatar}>
                <img className={email.avatar}
                     src='https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg' alt='img'/>
            </div>
            <div className={email.name}>
                <h4 className={email.name}>{props.name}</h4>
            </div>
            <div className={email.body}>
                <p className={email.body}>{props.messages}</p>
            </div>
        </div>
    )
}