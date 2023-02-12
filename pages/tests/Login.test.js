import React from "react";
import Login from "../Login"
import {render, screen, fireEvent} from '@testing-library/react'

test('login form with email and password', () => {
    let submittedEmail 
    let submittedPassword 

    const handleSubmit = formData => {
        submittedEmail = formData.email 
        submittedPassword = formData.password 
    }

    render(<Login onSubmit={handleSubmit} />)

    const email = 'example@example.com'
    const password = 'passwd'

    const emailElement = screen.getByRole('textbox', {
        name: /Email :/i,
    })

    const passwordElement = screen.getByRole('textbox', {
        name: /Password :/i,
    })

    const submitbuttonElement = screen.getByRole('button', {
        name: /Login/i
    })

    fireEvent.change(emailElement, {
        target: { value: email}
    })

    fireEvent.change(passwordElement, {
        target: { value: password}
    })

    fireEvent.click(submitbuttonElement)

    expect(submittedEmail).toBe(email)
    expect(submittedPassword).toBe(password)
})