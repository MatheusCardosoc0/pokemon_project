"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import {zodResolver} from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(2, 'coloque um nome valido'),
  surname: z.string().min(2, 'coloque um sobrenome valido')
})

type FormProps = z.infer<typeof schema>

const Form = () => {

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
      onSubmit={handleSubmit(onSubmit)}
      className='
        p-4
        bg-black
        flex
        flex-col
        gap-4
      '
    >

      <h2>Form</h2>

      <input
        {...register('name')}
        placeholder='name'
        aria-label="name"
      />
      <input
        {...register('surname')}
        placeholder='surname'
        aria-label="surname"
      />

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