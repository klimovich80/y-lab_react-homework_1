import React from 'react'
import Login from './Login'
import { authenticate } from '../utils/Api'

export default function App() {

  function handleLogin({ password, email }) {
    authenticate(password, email)
      .then((res) => {
        console.log(`запрос прошёл успешно`)
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='App'>
      <Login onLogin={handleLogin} />
    </div>
    )
}
