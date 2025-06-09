import css from './AppBar.module.css'
import Navigation from '../Navigation/Navigation'
import AuthNav from '../AuthNav/AuthNav'
import UserMenu from '../UserMenu/UserMenu'

export default function AppBar() {
    return (
        <div className={css.container}>
            <Navigation />
            <UserMenu />
            <AuthNav />
            {/* {isLoggedIn ? <UserMenu/> : <AuthNav/>} */}
        </div>
    )
}