import Questionnaire from "./components/Questionnaire";
//import Students from "./components/Students";
import StudentsTable from "./components/StudentsTable";
import useStudents from "./hooks/useStudents";
import useQuestionaire from "./hooks/useQuestionaire";

function App() {
 const {
  dataTodoEdit,
  dataBase,
  createStudents,
  updateStudents,
  setDataTodoEdit,
  deleteStudents} = useStudents()

  const { 
    handleChange,
    handleReset,
    handleSubmit,
    request} = useQuestionaire(createStudents, updateStudents, dataTodoEdit, setDataTodoEdit)

  return (
    <div>
      <h1>{dataTodoEdit ? "Editing Students" : "Adding Students"}</h1>
      <article className="grid-1-2"></article>
      <StudentsTable 
        dataBase={dataBase}
        setDataTodoEdit={setDataTodoEdit}
        deleteStudents={deleteStudents}
      />
      <Questionnaire
        handleChange={handleChange}
        handleReset={handleReset}
        handleSubmit={handleSubmit}
        request={request}
      />
      
    </div>
  );
}

export default App;
