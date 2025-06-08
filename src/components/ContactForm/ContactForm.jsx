import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useId } from 'react'
import * as Yup from "yup";
import "yup-phone-lite";
import { LuUserRoundPlus } from "react-icons/lu";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

export default function ContactForm() {
    const contactForm = {
        name: '',
        number: '',
    };
    const dispatch = useDispatch();
    const nameId = useId();
    const numberId = useId();
    const ContactSchema = Yup.object().shape({
        name: Yup.string().min(3, "Name must be at least 3 characters long.").max(50, "Name can't be longer than 50 characters.").required("Name is required."),
        number: Yup.string().required("Number is required.")
    });

    const handleSubmit = (values, actions) => {
        const { name, number } = values;
        dispatch(addContact({name, number}));
        actions.resetForm();
    }
    return (
        <Formik
            initialValues={contactForm }
            onSubmit={handleSubmit}
            validationSchema={ContactSchema}
        >
            <Form className={css.form}>
                <label className={css.label} htmlFor={nameId}>Name</label>
                <Field className={css.field} type="text" name="name" id={nameId} />
                <ErrorMessage className={css.error} name="name" component="span" />
                <label className={css.label} htmlFor={numberId}>Number</label>
                <Field className={css.field} type="tel" name="number" id={numberId} />
                <ErrorMessage className={css.error} name="number" component="span" />
				<button className={css.btn} type="submit">Add contact<LuUserRoundPlus className={css.icon} size="1rem"/></button>
			</Form>
        </Formik>
    )
}