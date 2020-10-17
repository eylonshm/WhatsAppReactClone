import React, { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar/Sidebar'
import Chat from './components/Chat/Chat'
import Login from './components/Login/Login'

function App() {
    const [user, setUser] = useState(null)
    return (
        <div className="app">
            {!user ? (
                <Login />
            ) : (
                <div className="app__body">
                    <SideBar />
                    <Chat />
                </div>
            )}
        </div>
    )
}

export default App
