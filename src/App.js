import React, { useState } from 'react'
import { Users } from './user'
const App = () => {
    const [query, setQuery] = useState("")
    return (
        <>
            <div className="app">
                <h2>Basic serach function</h2>
                <input type="text" className='search' placeholder='serach...' onChange={(e) => setQuery(e.target.value)} />
                <ul className='list'>
                    {Users.filter((value) => { return value.username.toLowerCase().includes(query) }).map((value) => {
                        return <li key={value.id}>{value.username}</li>
                    })}
                </ul>
            </div>
        </>
    )
}

export default App