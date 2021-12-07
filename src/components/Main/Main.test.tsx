import { render, screen } from '@testing-library/react'

import { Main } from '.'

describe('<Main />', () => {
  it('should render correctly', () => {
    render(<Main />)

    expect(
      screen.getByText(/Template React With TypeScript and Styled Components/i)
    ).toBeInTheDocument()
  })
})
