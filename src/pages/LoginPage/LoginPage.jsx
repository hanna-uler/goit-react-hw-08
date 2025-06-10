import css from './LoginPage.module.css'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function RegistrationPage() {
    return (
        <div className={css.container}>
            {/* <h1>Welcome!</h1> */}
            <p>Please, enter your data below.</p>
            <LoginForm/>
        </div>
    )
}