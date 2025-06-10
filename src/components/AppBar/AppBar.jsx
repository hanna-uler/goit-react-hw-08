import css from './AppBar.module.css'
import Navigation from '../Navigation/Navigation'
import AuthNav from '../AuthNav/AuthNav'
import UserMenu from '../UserMenu/UserMenu'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/selectors'

export default function AppBar() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <div className={css.container}>
            <Navigation />
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </div>
    )
}