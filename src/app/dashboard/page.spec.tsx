import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PageDashboard from '@/app/dashboard/page';

describe("page", () => {
  it("render", () => {
    render(<PageDashboard />)

    const header = screen.getAllByRole('heading')
    const headerText = 'routes'

    expect(header[0]).toHaveTextContent(headerText)
  })
})