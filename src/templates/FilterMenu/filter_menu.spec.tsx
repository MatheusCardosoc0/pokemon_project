import { fireEvent, logRoles, render } from "@testing-library/react"
import FilterMenuTemplate from '.'

jest.mock('@/context/useMenuFilterState', () => ({
  __esModule: true,
  useMenuFilterState: jest.fn(() => ({
    isOpen: true,
  })),
}));

describe("<FilterMenuTemplate />", () => {
  it("check elements rendered", () => {
    const view = render(<FilterMenuTemplate type_name={[]} />)
    const radio1 = view.getByRole('button', { name: /Tall/i })
    const radio2 = view.getByRole('button', { name: /Small/i })
    const radio3 = view.getByRole('button', { name: /Light/i })
    const radio4 = view.getByRole('button', { name: /Heavy/i })
    const resetFiltersButton = view.getByRole('button', { name: /Resetar filtros/i })

    expect(radio1).toBeInTheDocument()
    expect(radio2).toBeInTheDocument()
    expect(radio3).toBeInTheDocument()
    expect(radio4).toBeInTheDocument()
    expect(resetFiltersButton).toBeInTheDocument()
  })

  it("check options elements in menu rendering correctly", () => {
    const view = render(<FilterMenuTemplate type_name={['fire', 'water', 'grass']} />);

    const button = view.getByText('All');
    fireEvent.click(button);
    
    const optionWater = view.getByRole('button', {name: 'water'})
    const optionFire = view.getByRole('button', {name: 'fire'})
    const optionGrass = view.getByRole('button', {name: 'grass'})

    logRoles(view.container)
    expect(optionFire).toBeInTheDocument()
    expect(optionWater).toBeInTheDocument()
    expect(optionGrass).toBeInTheDocument()
  })
})