import css from './RegistrationForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useId } from 'react'
import * as Yup from "yup";
import { LuUserRound } from "react-icons/lu";
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export default function RegistrationForm() {
    const userForm = {
        name: "",
        email: "",
        password: "",
    };
    const dispatch = useDispatch();
    const nameId = useId();
    const emailId = useId();
    const passwordId = useId();
    const UserSchema = Yup.object().shape({
        name: Yup.string().min(3, "Name must be at least 3 characters long.").max(50, "Name can't be longer than 50 characters.").required("Name is required."),
        email: Yup.string().required("Email is required."),
        password: Yup.string().min(7, "Password must be at least 7 characters long.").required("Password is required.")
    });

    const handleSubmit = (values, actions) => {
        dispatch(register(values));
        actions.resetForm();
    }
    return (
        <Formik
            initialValues={userForm }
            onSubmit={handleSubmit}
            validationSchema={UserSchema}
        >
            <Form className={css.form}>
                <label className={css.label} htmlFor={nameId}>Name</label>
                <Field className={css.field} type="text" name="name" id={nameId} />
                <ErrorMessage className={css.error} name="name" component="span" />
                <label className={css.label} htmlFor={emailId}>Email</label>
                <Field className={css.field} type="email" name="email" id={emailId} />
                <ErrorMessage className={css.error} name="email" component="span" />
                <label className={css.label} htmlFor={passwordId}>Password</label>
                <Field className={css.field} type="password" name="password" id={passwordId} />
                <ErrorMessage className={css.error} name="password" component="span" />
				<button className={css.btn} type="submit">Register<LuUserRound className={css.icon} size="1rem"/></button>
			</Form>
        </Formik>
    )
}