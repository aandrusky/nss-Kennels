import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeesProvider"
import { Employee } from "./Employees"
import "./Employees.css"

export const EmployeesList = (props) => {
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


    return (
        <div className="employees">
            <h1>Employees</h1>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
            <article className="employeeList">
                {employees.map(employee => <Employee key={employee.id} employee={employee} />)}
            </article>
        </div>
    )
}