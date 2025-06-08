import css from './Contact.module.css'
import { FiUserMinus } from "react-icons/fi";
import { RiUserFill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ name, number, id}) {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(deleteContact(id));
     };
    return (
        <div className={css.container}>
            <p className={css.contactName}><RiUserFill className={css.icon} size="1.5rem"/>{name}</p>
            <p className={css.contactNumber}><BsTelephoneFill className={css.icon} size="1.5rem"/>{number}</p>
            <button type="button"className={css.btn} onClick={handleClick}>Delete <FiUserMinus className={css.icon} size="1rem"/></button>
        </div>
    )
    
}