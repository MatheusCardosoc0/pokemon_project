import { useMenuFilterState } from '@/context/useMenuFilterState'
import { BiMenuAltRight } from 'react-icons/bi'

const FilterButton = () => {

  const {
    isOpen,
    setIsOpen
  } = useMenuFilterState()

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Menu'
        className={`
          text-green-500
          sm:mr-4
          drop-shadow-[1px_1px_1px_black]
          hover:drop-shadow-[0px_0px_2px_black]
          hover:brightness-125
          ${isOpen && 'scale-125 bg-blue-700 rounded-full p-1 text-white'}
      `}
      >
        <BiMenuAltRight
          className='
          text-5xl
          sm:text-7xl
        '
        />
      </button>
    </div>
  )
}

export default FilterButton