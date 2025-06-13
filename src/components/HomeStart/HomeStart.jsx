import css from './HomeStart.module.css'

export default function HomeStart() {
    return (
        <div>
            <p className={css.descr}>Start by</p>
            <div className={css.btnBox}>
                <button className={css.btn} type='button'>Creating an account</button>
                <span className={css.span}>or</span>
                <button className={css.btn} type='button'>Logging in</button>
            </div>
            <p className={css.descr}>to access your phonebook.</p>
        </div>
    )
}