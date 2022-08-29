import { useEffect } from "react"
import { useState } from "react"

const startingInitials = {
    name:"",
    surname:"",
    id:null
}

const useQuestionaire = ({createStudents,updateStudents,dataTodoEdit,setDataTodoEdit}) => {

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

    return{
        handleChange,
        handleReset,
        handleSubmit,
        request
    }
}

export default useQuestionaire;