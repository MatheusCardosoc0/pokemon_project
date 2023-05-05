import {logRoles, render, screen} from '@testing-library/react'
import Form from '.'

describe('<Form />', () => {
  it('render', () => {
    const view = render(<Form />)

    const inputName = screen.getByRole('textbox', {name: 'name'})
    const inputLastName = screen.getByRole('textbox', {name: 'surname'})
    const buttonSubmit = screen.getByRole('button', {name: 'enviar'})
    const titleForm = screen.getByRole('heading', {name: /Form/i})

    
    logRoles(view.container)
    expect(titleForm).toBeVisible()
    expect(inputName).toBeVisible()
    expect(inputLastName).toBeVisible()
    expect(buttonSubmit).toBeVisible()
  })
})