import course from './School.module.css'
import {NavLink} from "react-router-dom";

export const School = () => {
    return (
        <div className={course.course}>
            <div className={course.header}>
                <h3>Обучение</h3>
                <hr className={course.separator}/>
            </div>
            <div className={course.links}>
                <div>
                    <NavLink className={link => link.isActive ? course.active : course.links}
                             to='/course'>Курс</NavLink>
                </div>
                <div>
                    <NavLink className={link => link.isActive ? course.active : course.links}
                             to='/tasks'>Задачи</NavLink>
                </div>
                <div>
                    <NavLink className={link => link.isActive ? course.active : course.links}
                             to='/help'>Помощь</NavLink>
                </div>
            </div>
        </div>
    )
}