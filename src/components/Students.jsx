const Students = ({component1, component2, dataTodoEdit}) => {
  return (
    <div>
      <h1>{dataTodoEdit ? "Editing Students" : "Adding Students"}</h1>
      <article className="grid-1-2">
        {component1}
        {component2}
      </article>
    </div>
  )
}

export default Students;