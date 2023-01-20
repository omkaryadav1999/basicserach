import React, { useState } from 'react'
import { Users } from './user'
import Table from './Table'
const App = () => {
    const [query, setQuery] = useState("")

    const serach = (data) => {
        return data.filter((item) => { return item.username.toLowerCase().includes(query) || item.name.toLowerCase().includes(query) || item.email.toLowerCase().includes(query) || item.address.street.toLowerCase().includes(query) })
    }
    return (
        <>
            <div className="app">
                <h2>Basic serach function</h2>
                <input type="text" className='search' placeholder='serach...' onChange={(e) => setQuery(e.target.value)} />
                <Table data={serach(Users)} />
            </div>
        </>
    )
}

export default App