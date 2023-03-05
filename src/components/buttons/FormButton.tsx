

interface FormButton {
    children: React.ReactNode
}
const FormButton = ({children}: FormButton) => {
  return (
    <button className="p-2 rounded-lg bg-dark mt-4 text-card w-full hover" type='submit'>{children}</button>

  )
}

export default FormButton