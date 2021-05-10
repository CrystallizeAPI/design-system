import React from 'react';
import { render, screen } from '@testing-library/react';
import { Checkbox } from '../src';

describe('Renders Checkbox Component', () => {
  it('Checkbox is visible', () => {
    render(
      <Checkbox
        checked={false}
        disabled={false}
        onChange={newValue => console.log(newValue)}
      />
    );

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
});
