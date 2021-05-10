import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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

  it('Checkbox is interactive', () => {
    const handleChangeMocked = jest.fn();
    render(
      <Checkbox
        checked={false}
        disabled={false}
        onChange={handleChangeMocked}
      />
    );

    fireEvent.click(screen.getByRole('checkbox'));
    expect(handleChangeMocked).toHaveBeenCalledTimes(1);
  });
});
