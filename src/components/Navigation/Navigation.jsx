import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import {selectIsLoggedIn} from '../../redux/auth/selectors'
import clsx from 'clsx'
import css from './Navigation.module.css'
import { ImOffice } from 'react-icons/im';

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
            <nav className={css.navMenu}>
                <NavLink to="/" className={buildLinkClass}>Home</NavLink>
                {isLoggedIn && <NavLink to="/contacts" className={buildLinkClass}>Contacts</NavLink>}
            </nav>
    );
};