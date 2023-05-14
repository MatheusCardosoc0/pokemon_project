import React from 'react'

interface RadioProps {
  value: string
  label: string
  title: string
  action: (value: any) => void
  secondaryLabel?: string
}

const Radio: React.FC<RadioProps> = ({
  value,
  label,
  title = '',
  secondaryLabel,
  action,
}) => {

  function setAction(label: any) {
    if (label == value) {
      action('none')
    }
    else {
      action(label)
    }
  }

  return (
    <>
    <h3 className='font-bold'>
      {title}
    </h3>
      <div
        className='
        w-full
        flex
        items-center
        justify-end
        gap-4
      '
      >
        <span className='flex items-center gap-2'>
          <label>
            {label}
          </label>
          <button
            onClick={() => setAction(label)}
            className={`
          w-12
          h-12
          rounded-full
          border-4
          border-white
          shadow-shadowButtonHover
          ${value == label && 'bg-blue-500'}
          ${value !== label && 'bg-neutral-400'}
        `}
          />
        </span>

        {secondaryLabel && (
          <span className='flex items-center gap-2'>
            <label>
              {secondaryLabel}
            </label>
            <button
              onClick={() => setAction(secondaryLabel)}
              className={`
              w-12
              h-12
              rounded-full
              border-4
              border-white
              shadow-shadowButtonHover
              ${value == secondaryLabel && 'bg-blue-500'}
              ${value !== secondaryLabel && 'bg-neutral-400'}
            `}
            />
          </span>
        )}
      </div>
    </>
  )
}

export default Radio