
interface Input{
    label: string;
    placeholder: string; 
    type: string
}
const FormInput = ({label,placeholder,type}: Input) => {
  return (
    <div className="flex flex-col pt-4 items-start w-full ">
    <label className="font-bold  py-1 px-1">{label}</label>
    <input placeholder={placeholder} type={type} className="bg-input/40 shadow-lg w-full p-2 py-3 pl-4"/>
    </div> 
  )
}

export default FormInput