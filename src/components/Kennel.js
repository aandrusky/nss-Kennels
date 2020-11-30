import React from "react"
import { Route } from "react-router-dom"

import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"

// import { LocationList } from "./Locations/LocationList"
// import { LocationProvider } from "./Locations/LocationProvider"

// import { EmployeesList } from "./Employees/EmployeesList"
// import { EmployeesProvider } from "./Employees/EmployeesProvider"

// import { Animal } from "./animal/Animal"
// import { AnimalList } from "./animal/AnimalList"
// import { AnimalProvider } from "./animal/AnimalProvider"

// import { CustomerList } from "./Customers/CustomerList"
// import { CustomerProvider } from "./Customers/CustomerProvider"

import "./Kennel.css"

export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)
//     <>
//         <h2>Nashville Kennels</h2>
//         <small>Loving care when you're not there.</small>

//         <h2>Locations</h2>
//         <LocationProvider>
//             <LocationList />
//         </LocationProvider>

//         <h2>Employees</h2>
//         <EmployeesProvider>
//             <EmployeesList />
//         </EmployeesProvider>

//         <h2>Animals</h2>
//         <AnimalProvider>
//             <AnimalList />
//         </AnimalProvider>

//         <h2>Customers</h2>
//         <CustomerProvider>
//             <CustomerList />
//         </CustomerProvider>
//     </>
// )