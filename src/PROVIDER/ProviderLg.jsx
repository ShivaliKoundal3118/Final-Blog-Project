import React from 'react'
import { store } from '../STORE/LoginStore'
import { Provider } from 'react-redux'
// import LoginForm from '../LOGIN/LoginForm'
// import Blog from '../BLOGS/Blog'
 function ProviderLg() {
  return (
    <Provider store={store}>
{/* <LoginForm/> */}
    </Provider>
  )
}
export default ProviderLg
