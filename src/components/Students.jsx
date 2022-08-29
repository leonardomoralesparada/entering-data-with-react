import Questionnaire from "./Questionnaire";
import StudentsTable from "./StudentsTable";
import useStudents from "../hooks/useStudents";

const Students = () => {
    const {dataTodoEdit,dataBase,createStudents,updateStudents,setDataTodoEdit,deleteStudents} = useStudents()
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