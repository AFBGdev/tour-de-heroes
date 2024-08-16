import { type PropsWithChildren } from 'react'

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void
  type?: HTMLButtonElement['type']
}

function Button({ children, onClick, type }: ButtonProps) {

  return (
    <button
      className='rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700'
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button