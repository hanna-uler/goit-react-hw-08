import Contact from '../Contact/Contact';
import css from './ContactList.module.css'
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactList() {
    const visibleContacts = useSelector(selectFilteredContacts);
    return (
        <ul className={css.container}>
            {visibleContacts.map((contact) => {
                return <li className={css.contactItem}
                    key={contact.id}>
                    <Contact name={contact.name} number={contact.number} id={contact.id} />
                </li>;
            })}
        </ul>
    )
}
