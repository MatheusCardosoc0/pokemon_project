"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(2, 'coloque um nome valido'),
  surname: z.string().min(2, 'coloque um sobrenome valido')
})

type FormProps = z.infer<typeof schema>

interface FormComponentProps {
  handleFormSubmit: (data: FormProps) => void
}

const Form = ({
  handleFormSubmit
}: FormComponentProps) => {

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormProps>({
    defaultValues: {
      name: '',
      surname: ''
    },
    resolver: zodResolver(schema),
    mode: 'all',
    criteriaMode: 'all',
    reValidateMode: 'onChange'
  })

  function onSubmit(data: FormProps) {
    console.log(data)
  }

  console.log(errors)

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className='
        p-4
        bg-black
        flex
        flex-col
        gap-4
        text-red-500
      '
    >

      <h2>Form</h2>



      <input
        {...register('name')}
        placeholder='name'
        aria-label="name"
      />
      {errors.name && (
        <p>{errors.name.message}</p>
      )}
      <input
        {...register('surname')}
        placeholder='surname'
        aria-label="surname"
      />
      {errors.surname && (
        <p>{errors.surname.message}</p>
      )}

      <button
        type="submit"
        className='
          bg-green-400
        '
      >
        enviar
      </button>
    </form>
  )
}

export default Form