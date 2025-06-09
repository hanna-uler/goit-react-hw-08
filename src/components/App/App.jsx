import { lazy, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { fetchContacts } from '../../redux/contacts/operations'
// import {selectLoading, selectError} from '../../redux/contacts/slice'
import ContactList from '../ContactList/ContactList'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import Loader from '../Loader/Loader'
// import css from './App.module.css'

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));
  
export default function App() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </Suspense>
    </Layout>
  )
}