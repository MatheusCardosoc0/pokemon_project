interface ButtonProps {
  label: string
  type?: "button" | "submit" | "reset"
  onClick?: () => void
  disabled?: boolean
  custom_style?: string
  color?: 'default' | 'done' | 'outline'
  aria_label?: string
}

const Button: React.FC<ButtonProps> = ({
  label = '',
  aria_label = '',
  type = 'button',
  disabled = false,
  custom_style,
  color = 'default',
  onClick = () => {}
}) => {

  const colors = {
    default: 'bg-gradient-to-tr from-blue-400 via-sky-400 to-cyan-500',
    done: 'bg-gradient-to-tr from-yellow-400 via-yellow-400 to-yellow-500',
    outline: ''
  }

  return (
    <button
      aria-label={aria_label || label}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${colors[color]}
        rounded-lg
        p-4
        w-full
        max-w-[240px]
        mt-12
        font-black
        text-white
        text-2xl
        hover:brightness-125
        ${custom_style}
      `}>
      {label}
    </button>
  )
}

export default Button