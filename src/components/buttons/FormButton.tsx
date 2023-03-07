

interface FormButton {
    children: React.ReactNode
}
const FormButton = ({children}: FormButton) => {
  return (
    <button className="p-2 rounded-lg bg-dark mt-4 cursor-pointer text-card w-full hover" type='submit'>{children}</button>

  )
}

export default FormButton