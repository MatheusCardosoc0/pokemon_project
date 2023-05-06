import { act, logRoles, render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@storybook/testing-library'
import Form from '.'

const handleFormSubmit = jest.fn()

describe('<Form />', () => {
  it('render', () => {
    const view = render(<Form handleFormSubmit={handleFormSubmit} />)

    const inputName = screen.getByRole('textbox', { name: 'name' })
    const inputLastName = screen.getByRole('textbox', { name: 'surname' })
    const buttonSubmit = screen.getByRole('button', { name: 'enviar' })
    const titleForm = screen.getByRole('heading', { name: /Form/i })


    logRoles(view.container)
    expect(titleForm).toBeVisible()
    expect(inputName).toBeVisible()
    expect(inputLastName).toBeVisible()
    expect(buttonSubmit).toBeVisible()
  });

  it('should show error message when fields was empty', async () => {
    render(<Form handleFormSubmit={handleFormSubmit} />)
   
    const buttonSubmit = screen.getByRole('button', { name: 'enviar' })

    act(() => {
      userEvent.click(buttonSubmit)
    })

    
    await waitFor(() => {
      expect(screen.getByText('coloque um nome valido'))
        .toBeVisible(),
      expect(screen.getByText('coloque um sobrenome valido'))
        .toBeVisible()
    })
  });

  it.only('a success message should appear if the fields are correctly filled in', async () => {
    render(<Form handleFormSubmit={handleFormSubmit} />)

    const inputName = screen.getByRole('textbox', { name: 'name' })
    const inputLastName = screen.getByRole('textbox', { name: 'surname' })
    const buttonSubmit = screen.getByRole('button', { name: 'enviar' })

    act(() => {
      userEvent.type(inputName, 'Matheus')
      userEvent.type(inputLastName, 'Cardoso')
      userEvent.click(buttonSubmit)
    })

    
    await waitFor(() => {
      expect(screen.queryByText('coloque um nome valido'))
        .not.toBeInTheDocument(),
      expect(screen.queryByText('coloque um sobrenome valido'))
        .not.toBeInTheDocument()
    })

    expect(inputName).toHaveValue('Matheus')
    expect(inputLastName).toHaveValue('Cardoso')

    await waitFor(() => {
      expect(handleFormSubmit).toHaveBeenCalledTimes(1),
      expect(handleFormSubmit).toHaveBeenCalledWith(
        {
          name: 'Matheus',
          surname: 'Cardoso'
        },
        expect.anything()
      )
    })
  });
})