import React, { useState } from 'react'
import { Users } from './user'
import Table from './Table'
const App = () => {
    const [query, setQuery] = useState("")

    const keys = ["name", "username", "email",]

    const serach = (data) => {
        return data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(query))
        );
    };
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