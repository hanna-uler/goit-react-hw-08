import css from './HomeLoggedIn.module.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/auth/selectors'

export default function HomeLoggedIn() {
    const userName = useSelector(selectUser).name;
    return (
        <div className={css.container}>
            <h2 className={css.header}>Hello,{userName}!</h2>
            <p className={css.text}>You can access your phonebook here:</p>
            <button className={css.btn} type='button'>My Contacts</button>
        </div>
    )
}