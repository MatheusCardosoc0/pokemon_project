"use client"

import { FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa'
import { colorsByTypeOfPokemon } from "@/constants/colorsByTypeOfPokemon"
import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { pokeball } from "@/assets/icons"
import { ElementsVariations } from '@/@types/pokemon_type'
import { useCurrentFilterState } from '@/context/useCurrentFilterState'



interface SelectProps {
  type_names: ElementsVariations[]
}

const Select: React.FC<SelectProps> = ({
  type_names
}) => {

  const [isOptionsModalOpen, setIsOptionsModalOpen] = useState(false)
  
  const {
    currentElementFilter,
    setCurrentElementFilter
  } = useCurrentFilterState()

  const controlModal = useCallback(() => {
    setIsOptionsModalOpen(prev => !prev)
  },[setIsOptionsModalOpen])

  function SetValue (name : ElementsVariations) {
    setCurrentElementFilter(name)
    controlModal()
  }

  return (
    <div
      className="
        flex
        flex-col
        gap-4
        w-full
        lg:w-[70%]
        text-center
        font-bold
        text-white
      "
    >
      <button
        onClick={() => controlModal()}
        className="
          relative
          group
          cursor-pointer
          p-2
          bg-red-600
          border-2
          border-red-700
          rounded-xl
          shadow-shadowButton
          hover:shadow-shadowButtonHover
          w-full
          uppercase
        "
      >
        <span>
          {currentElementFilter}
        </span>

        <span
          className={`
            absolute
            right-2
            top-2
            group-hover:scale-150
            ${isOptionsModalOpen && 'scale-150 text-blue-500 bg-white'}
            bg-black
            rounded-full
            text-2xl
          `}
        >
          {isOptionsModalOpen == true && <FaArrowAltCircleUp />}
          {isOptionsModalOpen == false && <FaArrowAltCircleDown />}
        </span>
      </button>

      {isOptionsModalOpen && (
        <div
          className="
            grid
            grid-cols-2
            rounded-xl
            overflow-hidden
            shadow-shadowButton
            fluidity-up
          "
        >
          {type_names.map((type) => (
            <button
              key={type}
              onClick={() => SetValue(type)}
              className={`
                ${colorsByTypeOfPokemon[type]}
                p-[0.6rem]
                cursor-pointer
                hover:text-transparent
                relative
                group
              `}
            >
              {type}

              <span 
              className={`
                hidden
                w-[30px]
                h-[30px] 
                absolute
                rounded-full
                left-1/2
                -translate-x-1/2
                top-2
                group-hover:block
              `}>
                <Image src={pokeball} alt="pokebola" />
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select