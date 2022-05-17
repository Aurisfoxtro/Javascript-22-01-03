// import {Button} from 'react-bootstrap'
import NewTask from '../new-task/NewTask.js'
// import {NewTask} from "../"
import Task from '../task/Task.js'
import './TaskList.css'

const TaskList = (props)=>{

    const response = props.response
    const messages = props.messages
    const refresh = props.refresh

    if(response.length > 0){
        return (
            <table className="table table-striped align-middle">
                <thead>
                    <tr>
                        <th colSpan="2">
                            <NewTask refresh={refresh} messages={messages} />
                        </th>
                    </tr>
                </thead>
            <tbody>
                {/* skliausteliai (), kad grazintu returnas, o ne {}  */}
                {response.map((row)=>(
                    <Task refresh={refresh} key={row.id} messages={messages} row={row} />
                ))}
            </tbody>
            </table>
        )
    }

    return messages('Nėra jokių sukurtų užduočių', 'danger')
}

export default TaskList