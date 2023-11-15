import React from 'react'
import Login from './Login'

export default function App() {

    function handleLogin({ password, email }){
        console.log(`handling logging in with password: ${password} and email ${email}`)
    }

  return (
    <div className='App'>
      <Login onLogin={handleLogin} />
    </div>
      
    )
}
