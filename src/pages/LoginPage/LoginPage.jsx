import css from './LoginPage.module.css'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoggedIn, selectLoginError } from '../../redux/auth/selectors'
import {clearLoginError} from '../../redux/auth/slice'
import { useEffect } from 'react'

export default function RegistrationPage() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const logInError = useSelector(selectLoginError);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clearLoginError())
    }, [dispatch]);
    
    return (
        <div className={css.container}>
            {!isLoggedIn
                && <div>
                      <h1 className={css.header}>Welcome!</h1>
                      <p className={css.descr}>Please, enter your data below to log in.</p>
                      <LoginForm />
                </div>
            }
            {logInError && <strong className={css.error}>Oops! Unable to sign in. Make sure your info is correct.</strong>}
        </div>
    )
}