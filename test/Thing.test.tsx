import React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../src';

describe('Thing', () => {
  it('Renders Thing component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
