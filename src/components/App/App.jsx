import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from '../../redux/contactsOps'
import {selectLoading, selectError} from '../../redux/contactsSlice'
import ContactList from '../ContactList/ContactList'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import Loader from '../Loader/Loader'
import css from './App.module.css'
  
export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <Loader />}
      {error && <strong>Sorry, something went wrong: {error}</strong>}
      <ContactList />
    </div>
  )
}