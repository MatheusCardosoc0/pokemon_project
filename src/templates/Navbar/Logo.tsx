import Image from 'next/image'
import iconLogo from './assets/iconLogo.png'

const Logo = () => {
  return (
    <div
      className='
        flex
        items-center
      '
    >
      <Image
        src={iconLogo}
        alt='Icone da logo'
        className='
          sm:w-[100px]
          sm:h-[100px]
          w-[80px]
          h-[80px]
        '
      />
      <h1
        className='
          text-3xl
          font-semibold
          text-white
          hidden
          md:flex
        '
      >
        Poke
        <b
          className='
            bg-gradient-to-tr
            from-white
            via-yellow-500
            to-yellow-700
            bg-clip-text
            text-transparent
            text-4xl
          '
        >
          Dex
        </b>
      </h1>
    </div>
  )
}

export default Logo