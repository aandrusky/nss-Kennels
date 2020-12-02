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
import { EmployeeDetail } from "./Employees/EmployeeDetail"
import { LocationDetail } from "./Locations/LocationDetail"
import { AnimalDetails } from "./animal/AnimalDetail"
import { Home } from "./Locations/Home"

export const ApplicationViews = (props) => {
    return (
        <>
            <AnimalProvider>
                <EmployeesProvider>
                    <LocationProvider>
                        {/* Render the location list when http://localhost:3000/ */}
                        <Route exact path="/">
                            <LocationList />
                        </Route>
                        <Route exact path="/home">
                            { <Home />  /*<--Home doesn't need props. so no "render=..." b/c there is no need for props on this page */}
                        </Route>
                        <Route path="/locations/:locationId(\d+)" render={
                            props => {
                                return <LocationDetail {...props} />
                            }
                        } />
                    </LocationProvider>
                </EmployeesProvider>
            </AnimalProvider>

            <EmployeesProvider>
                <LocationProvider>
                    <AnimalProvider>
                        <Route path="/employees/create" render={
                            props => <EmployeeForm {...props} />
                        } />

                        {/* New route for showing employee details */}
                        <Route path="/employees/:employeeId(\d+)" render={
                            props => <EmployeeDetail {...props} />
                        } />
                        <Route exact path="/employees" render={
                            props => {
                                console.log("props from react router dom", props)
                                return <EmployeesList {...props} />
                                // <EmployeeList history={props.history} location={props.location} match={props.match} message="Hello C44" />
                            }
                        } />
                    </AnimalProvider>
                </LocationProvider>
            </EmployeesProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        {/* Render the animal list when http://localhost:3000/animals */}
                        <Route exact path="/animals" render={
                            props => <AnimalList {...props} />
                        } />
                        <Route exact path="/animals/create" render={
                            props => <AnimalForm {...props} />
                        } />
                        <Route path="/animals/:animalId(\d+)" render={
                            props => <AnimalDetails {...props} />
                        } />
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <CustomerProvider>
                {/* Render the animal list when http://localhost:3000/customers */}
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>



        </>


    )
}