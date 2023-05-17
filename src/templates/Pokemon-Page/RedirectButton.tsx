"use client"

import { useRouter } from "next/navigation"
import { AiOutlineArrowLeft } from "react-icons/ai"

const RedirectButton = () => {

  const { push } = useRouter()

  return (
    <button
      onClick={() => push('/')}
      className="
        absolute
        top-1
        text-6xl
        left-1
        p-4
        rounded-full
        bg-white
        shadow-shadowButton
        hover:shadow-shadowButtonHover
      "
    >
      <AiOutlineArrowLeft />
    </button>
  )
}

export default RedirectButton