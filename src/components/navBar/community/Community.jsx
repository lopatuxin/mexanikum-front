import community from './Community.module.css'
import {NavLink} from "react-router-dom";

export const Community = () => {
    return (
        <div className={community.community}>
            <div className={community.header}>
                <h3>Сообщество</h3>
                <hr className={community.separator}/>
            </div>
            <div className={community.links}>
                <div>
                    <NavLink to='/friends'
                             className={link => link.isActive ? community.active : community.links}>
                        Друзья
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/forum'
                             className={link => link.isActive ? community.active : community.links}>
                        Форум
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/articles'
                             className={link => link.isActive ? community.active : community.links}>
                        Статьи
                    </NavLink>
                </div>
            </div>
        </div>
    )
}