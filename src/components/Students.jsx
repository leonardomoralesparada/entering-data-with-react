import { useState } from "react";
import Questionnaire from "./Questionnaire";
import StudentsTable from "./StudentsTable";

const initialData = [
    {id: 1 , name: "leo", surname: "morales"},
    {id:2, name: "luis", surname: "morales"},
    {id:3, name:"mathias", surname: "morales"},
    {id: 4 , name:"alex", surname: "morales"}
]

const Students = () => {

    const [dataBase, setDataBase] = useState(initialData)
    const [dataTodoEdit, setDataTodoEdit] = useState(null)

    const createStudents = (data) => {
        data.id = Date.now()
        setDataBase([
            ...dataBase,
            data
         ])
    } 

    const updateStudents = (data) => {
        let newData = dataBase.map((el) => el.id === data.id ? data : el);
        setDataBase(newData)
    }

    const deleteStudents = (id,name,surname) => {
        let isDelete = window.confirm(`Are you sure to remove: ${name} ${surname} ?`)
        if(isDelete){
            let newDelete = dataBase.filter((el) => el.id !== id)
            setDataBase(newDelete)
        }return;
    }

    return(
        <div>
            <h1>{dataTodoEdit ? "Editing Students" : "Adding Students"}</h1>
           <article className="grid-1-2">
            <Questionnaire
                    createStudents={createStudents}
                    updateStudents={updateStudents}
                    dataTodoEdit={dataTodoEdit}
                    setDataTodoEdit={setDataTodoEdit}
                />
                <StudentsTable  
                    dataBase={dataBase}
                    setDataTodoEdit={setDataTodoEdit}
                    deleteStudents={deleteStudents}
                />
           </article>
        </div>
    )
}

export default Students;