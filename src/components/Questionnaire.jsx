import PropTypes from "prop-types"

const Questionnaire = ( { handleSubmit, handleChange, handleReset, request }) => (
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
        <input type="submit" value="send" />
        <input type="reset" value="clean data" onClick={handleReset} />
      </form>
    </div>
)

Questionnaire.defaultProps = {
  handleSubmit: () => {},
  handleChange: () => {},
  handleReset: () => {},
  request: {}
}

Questionnaire.prototype = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  request: PropTypes.object.isRequired

}

export default Questionnaire;