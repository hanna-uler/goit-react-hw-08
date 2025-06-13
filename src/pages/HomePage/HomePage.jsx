import css from './HomePage.module.css'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/selectors'
import HomeLoggedIn from '../../components/HomeLoggedIn/HomeLoggedIn';
import HomeStart from '../../components/HomeStart/HomeStart';


export default function HomePage() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <div className={css.container}>
            <h1 className={css.header}>Welcome to Phonebook</h1>
            <p className={css.descr}>
                Phonebook is a simple and secure contact management app that allows you to register, log in, and keep your personal contact list in the cloud.
                Add new contacts, search by name, or remove outdated entries — all synced with your private backend.
            </p>
            {isLoggedIn ? <HomeLoggedIn/> : <HomeStart/> }
            {/* // <p className={css.descr}>Start by</p>
            // <div className={css.btnBox}><button className={css.btn} type='button'>Creating an account</button> <span className={css.span}>or</span> <button className={css.btn} >Logging in</button></div>
            // <p className={css.descr}>to access your phonebook.</p> */}
        </div>
    )
}