import css from './UserMenu.module.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/auth/selectors'
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';


export default function UserMenu() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const handleLogOut = () => {
        dispatch(logout());
    }
    return (
        <div className={css.container}>
            <p className={css.username}>Welcome, {user.name}!</p>
            <button type="button" onClick={handleLogOut}>Logout</button>
        </div>
    )
}