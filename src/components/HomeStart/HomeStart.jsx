import css from './HomeStart.module.css'
import { Link } from 'react-router-dom'

export default function HomeStart() {
    return (
        <div>
            <p className={css.descr}>Start by <strong>creating an account</strong> or <strong>logging in</strong> to access your phonebook.</p>
            <div className={css.btnBox}>
                <Link to="/register" className={css.linkBtn}>Create an account</Link>
                <Link to="/login" className={css.linkBtn}>Log in</Link>
            </div>
        </div>
    )
}