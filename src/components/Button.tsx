interface ButtonProps {
  label: string
  type?: "button" | "submit" | "reset"
  onClick?: () => void
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  label = '',
  type = 'button',
  disabled = false,
  onClick = () => {}
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="
        bg-gradient-to-tr from-blue-400 via-sky-400 to-cyan-500
        rounded-lg
        p-4
        w-full
        max-w-[240px]
        mt-12
        font-black
        text-white
        text-2xl
        hover:brightness-125
      ">
      {label}
    </button>
  )
}

export default Button