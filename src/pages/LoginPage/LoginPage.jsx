import css from './LoginPage.module.css'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/selectors'

export default function RegistrationPage() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <div className={css.container}>
            {!isLoggedIn
                && <div>
                      <h1>Welcome!</h1>
                      <p>Please, enter your data below to log in.</p>
                      <LoginForm />
                </div>
            }
        </div>
    )
}