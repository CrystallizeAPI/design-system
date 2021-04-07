import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../src/';

describe('Renders Button Component', () => {
  it('button is visible', () => {
    render(<Button label={'Click Me'}>Click Me</Button>);
    expect(screen.getByRole('button')).toBeVisible();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
