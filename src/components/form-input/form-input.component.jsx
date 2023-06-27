import { Container, Input, Label } from './form-input.style.jsx'

const FormInput = ({ label, inputOption }) => {
  return (
    <Container>
      <Input {...inputOption} />
      {label && (
        <Label htmlFor={inputOption.id} $shrink={inputOption.value.length}>
          {label}
        </Label>
      )}
    </Container>
  )
}

export default FormInput
