import React from 'react'
import Login from '../src/components/Login'
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils'

import { user_name, password } from './data/dummyUser.data.json'

let container = null;
beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
})

jest.spyOn(window, "alert").mockImplementation((str) => {last_message = str})

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}))

test('Login form labels are rendered, Login button is rendered', async () => {
    await act(async () => {
        render(<Login/>, container)
    })

    var userNameFormField = container.querySelector("[data-testid='user-name-form-field']")
    var userNameFormLabel = container.querySelector("[data-testid='user-name-form-label']")

    expect(userNameFormField).toBeDefined()
    expect(userNameFormLabel).toBeDefined()
    expect(userNameFormLabel.innerHTML).toEqual("Username")

    var passwordFormField = container.querySelector("[data-testid='password-form-field']")
    var passwordFormLabel = container.querySelector("[data-testid='password-form-label']")

    expect(passwordFormField).toBeDefined()
    expect(passwordFormLabel).toBeDefined()
    expect(passwordFormLabel.innerHTML).toEqual("Password")

    var signInButton = container.querySelector("[data-testid='sign-in-button']")

    expect(signInButton).toBeDefined()
    expect(signInButton.innerHTML).toEqual("Sign in")
})

test('User can type their name into Username field', async () => {
    await act(async () => {
        render(<Login/>, container)
    })

    var userNameFormField = container.querySelector("[data-testid='user-name-form-field']")

    await act(async () => {
        userNameFormField.setAttribute("value", user_name)
    })
    expect(userNameFormField).toBeDefined()
    expect(userNameFormField.getAttribute("value")).toEqual(user_name)
})

test('User can type their password into password field', async () => {
    await act(async () => {
        render(<Login/>, container)
    })

    var passwordFormField = container.querySelector("[data-testid='password-form-field']")

    await act(async () => {
        passwordFormField.setAttribute("value", password)
    })
    expect(passwordFormField).toBeDefined()
    expect(passwordFormField.getAttribute("value")).toEqual(password)
})