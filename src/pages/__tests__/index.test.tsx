import React from 'react'
import Home from '../index'
import { fireEvent, render, screen, waitFor } from './utils/testUtils'

describe('Home Tests', () => {
  describe('when change input name', () => {
    it('shows name changed besides greeting message', async () => {
      render(<Home />)
      fireEvent.change(screen.getByTestId('input-name'), {
        target: { value: 'Marco' },
      })
      await waitFor(() => {
        expect(screen.getByText('Hello Marco')).toBeInTheDocument()
      })
    })
  })
})
