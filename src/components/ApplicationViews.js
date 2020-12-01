import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./Locations/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./Customers/CustomerProvider"
import { EmployeesProvider } from "./Employees/EmployeesProvider"
import { LocationList } from "./Locations/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./Customers/CustomerList"
import { EmployeesList } from "./Employees/EmployeesList"
import { EmployeeForm } from "./Employees/EmployeeForm"
import { AnimalForm } from "./animal/AnimalForm"

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            // animal appointment route
            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <EmployeesProvider>
                            <Route exact path="/animals"> render={
                                props => <AnimalList {...props} />
                            } />

                        <Route exact path="/animals/create" render={
                                    props => <AnimalForm {...props} />
                                } />
                                <AnimalList />
                            </Route>
                        </EmployeesProvider>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>


            <CustomerProvider>
                {/* Render the animal list when http://localhost:3000/customers */}
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>


            // add employee route
            <AnimalProvider>
                <LocationProvider>
                    <EmployeesProvider>
                        <Route exact path="/employees" render={
                            props => {
                                console.log("props from react router dom", props)
                                return <EmployeesList {...props} />
                                // <EmployeeList history={props.history} location={props.location} match={props.match} message="Hello C44" />
                            }
                        } />
                        <Route path="/employees/create" render={
                            props => <EmployeeForm {...props} />
                        } />
                    </EmployeesProvider>
                </LocationProvider>
            </AnimalProvider>
        </>
    )
}