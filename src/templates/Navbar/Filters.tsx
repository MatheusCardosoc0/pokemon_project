import { BiMenuAltRight } from 'react-icons/bi'

const Filters = () => {
  return (
    <button
      className='
        p-4
        rounded-full
        transition-all
        duration-500
        hover:bg-white
        sm:mr-4
      '
    >
      <BiMenuAltRight
        className='
          text-green-500
          text-5xl
          sm:text-6xl
        '
      />
    </button>
  )
}

export default Filters