import StudentsList from "./StudentsList";
import PropTypes from "prop-types"

const StudentsTable = ({ dataBase, deleteStudents, setDataTodoEdit }) => {
  return (
    <div>
      <h1>Students List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {dataBase.length === 1 ? (
            <tr>
              <td colSpan="3">No Data Please Add</td>
            </tr>
          ) : (
            dataBase.map((el) =>
              <StudentsList
                key={el.id}
                el={el}
                deleteStudents={deleteStudents}
                setDataTodoEdit={setDataTodoEdit}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

StudentsTable.defaultProps = {
  dataBase: {},
  deleteStudents: () => { },
  setDataTodoEdit: () => { }
}

StudentsTable.prototype = {
  dataBase: PropTypes.object.isRequired,
  deleteStudents: PropTypes.func.isRequired,
  setDataTodoEdit: PropTypes.func.isRequired

}

export default StudentsTable;