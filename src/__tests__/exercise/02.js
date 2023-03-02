// simple test with React Testing Library
// http://localhost:3000/counter

import * as React from 'react'
// 🐨 import the `render` and `fireEvent` utilities from '@testing-library/react'
import {render, fireEvent} from '@testing-library/react'
import Counter from '../../components/counter'

// NOTE: this is a new requirement in React 18
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment

// 💣 remove this. React Testing Library does this automatically!

test('counter increments and decrements when the buttons are clicked', () => {
  const {container} = render(<Counter />)
  // console.log(container)

  // 🐨 instead of `div` here you'll want to use the `container` you get back
  // from React Testing Library
  const [decrement, increment] = container.querySelectorAll('button')
  const message = container.firstChild.querySelector('div')

  expect(message).toHaveTextContent('Current count: 0')

  // message.textContent.toHaveTextContent('Current count: 0')

  // 🐨 replace the next two statements with `fireEvent.click(button)`
  // 💰 note that you can remove `act` completely!
  fireEvent.click(increment)
  expect(message).toHaveTextContent('Current count: 1')
  fireEvent.click(decrement)
  expect(message).toHaveTextContent('Current count: 0')
})
