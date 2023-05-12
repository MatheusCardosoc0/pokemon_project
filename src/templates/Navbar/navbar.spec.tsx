import { logRoles, render, screen } from "@testing-library/react"
import Navbar from '.'

describe('<Navbar />', () => {
  it('check logo text', () => {
    const view = render(<Navbar />)

    const title = screen.getByRole('heading', { name: /Poke Dex/i })

    logRoles(view.container)
    expect(title).toBeVisible()
  })
})