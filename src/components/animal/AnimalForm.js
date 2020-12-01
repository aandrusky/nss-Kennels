import React, { useContext, useRef, useEffect } from "react"
// import { EmployeeContext } from "./EmployeesProvider"
import { LocationContext } from "../Locations/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import { CustomerContext } from "../Customers/CustomerProvider"
import "./Animal.css"

export const AnimalForm = (props) => {
    const { addAnimal, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)
    // const { employee, getEmployees } = useContext(EmployeeContext)

    const name = useRef(null)
    const location = useRef(null)
    const customer = useRef(null)
    const breed = useRef(null)

    useEffect(() => {
        getAnimals().then(getLocations)
        .then(getCustomers)
     },
    [])

    const constructNewAppointment = () => {
        /*
            The `location` and `animal` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
        const locationId = parseInt(location.current.value)
        const customerId = parseInt(customer.current.value)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addAnimal({
                name: name.current.value, 
                breed: breed.current.value,
                locationId,
                customerId
            })
            .then(() => props.history.push("/animals"))
        }
    }

    return (
        <form className="animalForm">
            <h2 className="animalForm__title">New Appointment</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Animal name: </label>
                    <input type="text" id="animalName" ref={name} required autoFocus className="form-control" placeholder="Animal Name" />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalBreed">Animal breed: </label>
                    <input type="text" id="animalBreed" ref={breed} required autoFocus className="form-control" placeholder="Animal Breed" />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Request location: </label>
                    <select defaultValue="" name="location" ref={location} id="animalLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>

             <fieldset>
                <div className="form-group">
                    <label htmlFor="customer">Caretaker is: </label>
                    <select defaultValue="" name="customer" ref={customer} id="customerAnimal" className="form-control" >
                        <option value="0">Select a customer</option>
                        {customers.map(c => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset> 

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewAppointment()
                }}
                className="btn btn-primary">
                Save Appointment
            </button>
        </form>
    )
}