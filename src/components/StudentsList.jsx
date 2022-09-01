import PropTypes from "prop-types"

const StudentsList = ({ el, setDataTodoEdit, deleteStudents }) => {
  let { name, surname, id } = el
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{surname}</td>
        <td>
          <button onClick={() => setDataTodoEdit(el)}>edit</button>
          <button onClick={() => deleteStudents(id, name, surname)}>remove</button>
        </td>
      </tr>
    </>
  )
}

StudentsList.defaultProps = {
  el: {},
  deleteStudents: () => { },
  setDataTodoEdit: () => { }
}

StudentsList.prototype = {
  el: PropTypes.object.isRequired,
  deleteStudents: PropTypes.func.isRequired,
  setDataTodoEdit: PropTypes.func.isRequired
}

export default StudentsList;