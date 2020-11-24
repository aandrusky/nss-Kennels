import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeesProvider"
import { Employee } from "./Employees"
import "./Employees.css"

export const EmployeesList = () => {
    // This state changes when `getLocations()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("EmployeeList: Initial render before data")
        getEmployees()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
    useEffect(() => {
        console.log("EmployeesList: Employee state changed")
        console.log(employees)
    }, [employees])

    return (
        <div className="employees">
        {
            employees.map(emp => <Employee key={emp.id} employee={emp} />)
        }
        </div>
    )
}