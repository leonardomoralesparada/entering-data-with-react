import { useEffect } from "react"
import { useState } from "react"
import PropTypes from "prop-types"


const startingInitials = {
    name:"",
    surname:"",
    id:null
}

const  Questionnaire = ({createStudents,updateStudents,dataTodoEdit,setDataTodoEdit}) => {
const [request,setRequest] = useState(startingInitials)


useEffect(() => {
if(dataTodoEdit){
    setRequest(dataTodoEdit)
}else{
    setRequest(startingInitials)
}
}, [dataTodoEdit])

    const handleChange = (e) => {
    setRequest({
        ...request,
        [e.target.name]:e.target.value
    })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!request.name || !request.surname){
            alert("agrega los datos")
            return;
        }

        if(request.id === null){
            createStudents(request)
        }else{
            updateStudents(request)
        }

        handleReset();
        
    }

    const handleReset = (e) => {
        setRequest(startingInitials)
        setDataTodoEdit(null)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
               <label>
                Name:
                 <input 
                    type="text" 
                    placeholder="enter name" 
                    onChange={handleChange}
                    value={request.name}
                    name="name"
                 />
               </label>
               <label>
                Surname:
                 <input 
                    type="text" 
                    placeholder="enter surname" 
                    onChange={handleChange}
                    value={request.surname}
                    name="surname"
                 />
               </label>
                <input type="submit" value="send"/>
                <input type="reset" value="clean data" onClick={handleReset}/>
            </form>
        </div>
    )
}

Questionnaire.defaultProps = {
    createStudents: () => {},
    updateStudents: () => {},
    dataTodoEdit: {},
    setDataTodoEdit: () => {}

}

Questionnaire.prototype = {
    createStudents: PropTypes.func.isRequired,
    updateStudents: PropTypes.func.isRequired,
    dataTodoEdit: PropTypes.object.isRequired,
    setDataTodoEdit: PropTypes.func.isRequired

}

export default Questionnaire;