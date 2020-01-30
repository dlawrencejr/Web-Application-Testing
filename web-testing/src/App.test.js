import React from 'react';
import { render } from '@testing-library/react';

import Display from './components/Display'
import Dashboard, {addBall,addStrike} from './components/Dashboard'


test('renders display component', () => {
  const { getByText } = render(<Display />);
  const displayElement = getByText(/Home/i);
  expect(displayElement).toBeInTheDocument();
});

test('renders dashboard component', () => {
  const { getByText } = render(<Dashboard/>);
  const dashboardElement = getByText(/strike/i);
  expect(dashboardElement).toBeInTheDocument();
});

describe('balls and strikes reset to 0 when you get 3 strikes or 4 balls', () =>{
  it('balls resets properly to 0', () =>{
  

    const expected = 0;
    const balls = 3;
    const actual = addBall(balls);

    expect(actual).toBe(expected); 
  });

  it('strikes resets properly to 0', () =>{

    const expected = 0;
    const strikes = 2;
    const actual = addStrike(strikes, 0);

    expect(actual[0]).toBe(expected);
  })
  
});