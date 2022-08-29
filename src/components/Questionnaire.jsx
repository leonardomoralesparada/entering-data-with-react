import PropTypes from "prop-types"
import useQuestionaire from "../hooks/useQuestionaire"

const  Questionnaire = ({createStudents,updateStudents,dataTodoEdit,setDataTodoEdit}) => {

    const {handleSubmit,handleChange,handleReset,request,} = useQuestionaire({createStudents,updateStudents,dataTodoEdit,setDataTodoEdit})

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