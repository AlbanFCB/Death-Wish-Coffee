import React from "react";
import CreateAccount from "../CreateAccount";
import {render, screen, fireEvent} from '@testing-library/react'

test('create account form with First & Last Name, email address and password', () => {
    let submittedFirstName 
    let submittedLastName 
    let submittedEmail 
    let submittedPassword 

    const handleSubmit = formData => {
        submittedFirstName = formData.firstName 
        submittedLastName = formData.lastName
        submittedEmail = formData.email 
        submittedPassword = formData.password
    }
    render(<CreateAccount onSubmit={handleSubmit} />) 

    const firstName = 'John'
    const lastName = 'Doe'
    const email = "example@example.com"
    const password = 'passwd'

    const firstNameElement = screen.getByRole('textbox', {
        name: /First Name :/i
    })

    const lastNameElement = screen.getByRole('textbox', {
        name: /Last Name :/i
    })

    const emailElement = screen.getByRole('textbox', {
        name: /Email :/i
    })

    const passwordElement = screen.getByRole('textbox', {
        name: /Password :/i
    })

    const submitbuttonElement = screen.getByRole('button', {
        name: /Create/i})

    fireEvent.change(firstNameElement, {
        target: {value: firstName}
    })

    fireEvent.change(lastNameElement, {
        target: {value: lastName}
    })

    fireEvent.change(emailElement, {
        target: {value: email}
    })

    fireEvent.change(passwordElement, {target: {value: password}})

    fireEvent.click(submitbuttonElement)

    expect(submittedFirstName).toBe(firstName)
    expect(submittedLastName).toBe(lastName)
    expect(submittedEmail).toBe(email)
    expect(submittedPassword).toBe(password)
})