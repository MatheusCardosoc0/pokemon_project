import { fireEvent, logRoles, render, screen } from "@testing-library/react"
import Navbar from '.'
import FilterButton from "./FilterButton"
import FilterMenu from "../FilterMenu"

describe('<Navbar />', () => {
  it('check logo text', () => {
    const view = render(<Navbar />)

    const title = screen.getByRole('heading', { name: /Poke Dex/i })
    const image = screen.getByRole('img', { name: /Icone da logo/i })
    const button = screen.getByRole('button', { name: /Menu/i })

    logRoles(view.container)
    expect(title).toBeVisible()
    expect(image).toBeVisible()
    expect(button).toBeVisible()
  })

  it('check button filter operation', () => {
    render(
      <>
        <FilterButton />
        <FilterMenu type_name={[]} />
      </>
    )

    fireEvent.click(screen.getByRole('button', { name: /Menu/i }))
    expect(screen.getByText('Filtros:')).toBeInTheDocument()
  })
})