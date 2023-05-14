import { default_pokemon, pokeball } from '@/assets/icons'
import Image from 'next/image'
import React from 'react'

interface SkeletonProps {
  qt: number
}

const Skeleton: React.FC<SkeletonProps> = ({
  qt = 0
}) => {


  const skeletonElementCard = Array.from({ length: 2 }, (_, index) => (
    <span
      key={index}
      className='
        w-[46px]
        h-[46px]
        bg-black
        rounded-full
      '
    />
  ));

  const skeletonPokemonCard = Array.from({ length: qt }, (_, index) => (
    <button
      aria-label='Skeleton'
      id='Skeleton'
      key={index}
      className={`
        w-[200px]
        h-[300px]
        p-1
        flex
        flex-col
        items-center
        justify-center
        rounded-xl
        relative
        brightness-105
        shadow-shadowButton
        z-10
        transition-all
        duration-500
        hover:scale-110
        bg-black
      `}
    >
      <div className="
        flex
        gap-2
        w-full
        justify-start
      ">
        {skeletonElementCard}
      </div>
      <Image
        src={default_pokemon}
        alt="My Image"
        width={500}
        height={500}
      />

      <Image
        src={pokeball}
        alt="pokeball"
        className="
          absolute
          z-[-1]
          w-[140px]
          right-1
        "
      />

      <b
        className="
          text-xl
          text-white
        
          tracking-wider
        "
      >
        ????????
      </b>
    </button>
  ));

  return (
    <>
      {skeletonPokemonCard}
    </>
  )
}

export default Skeleton