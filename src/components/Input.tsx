interface InputProps {
  type?: string
  name: string
}

function Input({type = "text", name}: InputProps) {
  return (
    <input
      className='w-full rounded-lg py-1.5 px-3 border-gray-400 border' type={type}
      name={name}
    />
  )
}

export default Input