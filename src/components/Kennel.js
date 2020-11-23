import React from "react"

import { Animal } from "./animal/Animal"
import "./animal/Animal.css"

import { Employee } from "./Employees/Employees"
import "./Employees/Employees.css"

import { Location } from "./Locations/Locations"
import "./Locations/Locations.css"

import { Customer } from "./Customers/Customers"
import "./Customers/Customers.css"

import "./Kennel.css"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <Animal />
            <Animal />
            <Animal />
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <Employee />
            <Employee />
            <Employee />
        </article>

        <h2>Locations</h2>
        <article className="locations">
            <Location />
            <Location />
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
            <Customer />
        </article>
    </>
)