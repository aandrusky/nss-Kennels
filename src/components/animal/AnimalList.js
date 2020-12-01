import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../Locations/LocationProvider"
import { CustomerContext } from "../Customers/CustomerProvider"
import { Animal } from "./Animal"
import "./Animal.css"

export const AnimalList = (props) => {
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getLocations()
            .then(getCustomers)
            .then(getAnimals)
    },
        []
    )


    return (
        <div className="animals">
            <h1>Animals</h1>
            <button onClick={() => props.history.push("/animals/create")}>
                Make Appointment
            </button>
            <article className="animalList">
                {animals.map(animal => <Animal key={animal.id} animal={animal} />)}
            </article>
        </div>
    )

}