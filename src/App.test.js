import React from "react";
import { render } from '@testing-library/react';
import Header from "./components/Header/Header"

test('Header has "logo"', () => {
  const header = render(<Header />);

  expect(header.container.getElementsByClassName('logo').length).toBe(1);
});
