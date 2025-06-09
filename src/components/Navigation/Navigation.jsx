import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import css from './Navigation.module.css'

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
    return (
            <nav className={css.navMenu}>
                <NavLink to="/" className={buildLinkClass}>Home</NavLink>
                <NavLink to="/contacts" className={buildLinkClass}>Contacts</NavLink>
            </nav>
    );
};