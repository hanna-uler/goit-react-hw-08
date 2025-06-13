import { lazy, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import Loader from '../Loader/Loader'
import RestrictedRoute from '../RestrictedRoute';
import PrivateRoute from '../PrivateRoute';
import css from './App.module.css'

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));
  
export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])
  
  return isRefreshing
    ? (<Loader />)
    : (
      <Layout className={css.container}>
        <Suspense fallback={null}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<RestrictedRoute component={<RegistrationPage/>} />} />
            <Route path='/login' element={<RestrictedRoute component={<LoginPage/>} />} />
            <Route path='/contacts' element={<PrivateRoute component={<ContactsPage />}/>} />
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
        </Suspense>
      </Layout>
    ) 
}
