import css from './HomePage.module.css'

export default function HomePage() {
    return (
        <div className={css.container}>
            <h1 className={css.header}>Welcome to Phonebook</h1>
            <p className={css.descr}>
                Phonebook is a simple and secure contact management app that allows you to register, log in, and keep your personal contact list in the cloud.
                Add new contacts, search by name, or remove outdated entries — all synced with your private backend.
            </p>
            <p className={css.descr}>
                Start by <button className={css.btn} type='button'>Creating an account</button> or <button className={css.btn} >Logging in</button> to access your phonebook.
            </p>
        </div>
    )
}