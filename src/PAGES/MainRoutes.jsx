import React from 'react'
import LoginForm from '../LOGIN/LoginForm'
import Blog from '../BLOGS/Blog'
import About from './About'
import HomePage from './HomePage'
// import Footer from '../HeadFoot/Footer' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Headers from '../HeadFoot/Headers'
import { store } from '../STORE/LoginStore'
// import ProviderLg from '../PROVIDER/ProviderLg'
import { Provider } from 'react-redux'
//import ProviderLg from './PROVIDER/ProviderLg';
function MainRoutes() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
      <Route path="/" element={<LoginForm />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/blogs/edit' element={<Blog />} />
        <Route path='/blogs/delete' element={<Blog />} />
        <Route path='/blogs/clearall' element={<Blog />} />
        <Route path='/blogs/update' element={<Blog />} />
        <Route path='/' element={<LoginForm />} />
      </Routes>
    </Router>
    </Provider>
  )
}

export default MainRoutes
  