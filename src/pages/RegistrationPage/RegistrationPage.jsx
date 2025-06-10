import css from './RegistrationPage.module.css'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

export default function RegistrationPage() {
    return (
        <div className={css.container}>
            <h1>Welcome to the Registration Page</h1>
            <p>Please fill in the fields.</p>
            <RegistrationForm/>
        </div>
    )
}