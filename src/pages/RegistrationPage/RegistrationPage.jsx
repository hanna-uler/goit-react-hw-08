import css from './RegistrationPage.module.css'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

export default function RegistrationPage() {
    return (
        <div className={css.container}>
            <h1 className={css.header}>Welcome to the Registration Page</h1>
            <p className={css.descr}>Please fill in the fields to register your account.</p>
            <RegistrationForm/>
        </div>
    )
}