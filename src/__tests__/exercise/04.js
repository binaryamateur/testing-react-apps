// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'
const {build, fake} = require('@jackfranklin/test-data-bot')

const buildLoginForm = build({
  fields: {
    userData: fake(faker => faker.internet.userName()),
    passData: fake(faker => faker.internet.password()),
  },
})

test('submitting the form calls onSubmit with username and password', async () => {
  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted
  // 💰 if you need a hand, here's what the handleSubmit function should do:

  const handleSubmit = jest.fn()

  //
  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  render(<Login onSubmit={handleSubmit} />)
  //
  // 🐨 get the username and password fields via `getByLabelText`
  let username = screen.getByLabelText('Username')
  let password = screen.getByLabelText('Password')

  const {userData, passData} = buildLoginForm()
  await userEvent.type(username, userData)
  await userEvent.type(password, passData)

  let button = screen.getByRole('button', {name: /submit/i})

  console.log(passData)

  userEvent.click(button).then(() => {
    expect(handleSubmit).toHaveBeenCalled({
      username: userData,
      password: passData,
    })
    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })

  // 🐨 use `await userEvent.type...` to change the username and password fields to
  //    whatever you want
  //
  // 🐨 click on the button with the text "Submit"
  //
  // assert that submittedData is correct
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
})

/*
eslint
  no-unused-vars: "off",
*/
