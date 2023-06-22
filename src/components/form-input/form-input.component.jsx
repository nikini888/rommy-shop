import './form-input.style.scss'

const FormInput = ({ label, inputOption }) => {
  return (
    <div className="group">
      <input className="form-input" {...inputOption} />
      {label && (
        <label
          htmlFor={inputOption.id}
          className={`${
            inputOption.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  )
}

export default FormInput
