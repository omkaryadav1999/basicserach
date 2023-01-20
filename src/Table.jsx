import React from 'react'

const Table = ({ data }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>city</th>
                    <th>street</th>
                </tr>
                {data.map((item) => {
                    return <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.address.city}</td>
                        <td>{item.address.street}</td>
                    </tr>
                })}
            </tbody>

        </table>
    )
}

export default Table