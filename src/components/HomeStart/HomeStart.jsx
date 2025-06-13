import css from './HomeStart.module.css'
import { Link } from 'react-router-dom'

export default function HomeStart() {
    return (
        <div>
            <p className={css.descr}>Start by</p>
            <div className={css.btnBox}>
            <Link to="/register" className={css.linkBtn}>Creating an account</Link>
                <span className={css.span}>or</span>
            <Link to="/login" className={css.linkBtn}>Logging in</Link>
            </div>
            <p className={css.descr}>to access your phonebook.</p>
        </div>
    )
}