import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../Locations/LocationProvider"
import { CustomerContext } from "../Customers/CustomerProvider"
import { Animal } from "./Animal"
import "./Animals.css"

export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getLocations()
            .then(getCustomers)
            .then(getAnimals)
    }, [])


    return (
        <div className="animals">
            {
            animals.map(animal => {
                const owner = customers.find(c => c.id === animal.customerId)
                const clinic = locations.find(l => l.id === animal.locationId)

            return < Animal key = {animal.id} animal={animal}  location={clinic} customer={owner} />
        })
        }
        </div>
    )

}