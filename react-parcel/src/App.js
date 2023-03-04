import React, { useState, useEffect } from 'react'

const App = ({ name }) => {
    const [tasks, updateTasks] = useState([])

    useEffect(() => {
        window.addEventListener('@ccs/react-route/todo/add-task', event => {
            updateTasks(oldTasks => [
                ...oldTasks,
                event.detail,
            ])
        })
    }, [])

    return (
        <>
            <h1>{name}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.describe}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default App