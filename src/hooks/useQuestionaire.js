import { useEffect } from "react"
import { useState } from "react"

const startingInitials = {
  name: "",
  surname: "",
  id: ""
}

const useQuestionaire = ({ createStudents, updateStudents, dataTodoEdit, setDataTodoEdit }) => {
  const [request, setRequest] = useState(startingInitials)
  

  useEffect(() => {
    if (dataTodoEdit) {
      setRequest(dataTodoEdit)
    } else {
      setRequest(startingInitials)
    }
  }, [dataTodoEdit])
  

  const handleChange = (e) => {
    setRequest({
      ...request,
      [e.target.name]: e.target.value
    })
  }

  const handleReset = () => {
    setRequest(startingInitials)
    setDataTodoEdit(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

   if (!request.name || !request.surname) {
    console.log(request)
    alert("agrega los datos")
      return;
    }

    if (request.id === null) {
      createStudents(request)
    } else {
      updateStudents(request)
    }
    handleReset();
  }

  return {
    handleChange,
    handleReset,
    handleSubmit,
    request
  }
}

export default useQuestionaire;