import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animal.css"

export const AnimalList = () => {

    const { animals, getAnimals } = useContext(AnimalContext)

    useEffect(() => {
        console.log("AnimalList: initial render before data")
        getAnimals()
    }, [])

    useEffect(() => {
        console.log("AnimalList: Animal state changed")
        console.log(animals)
    }, [animals])

    return (
        <div className="animals">
            {
                animals.map(ani => <Animal key={ani.id} animal={ani}/>) 
            }
        </div>
    )

}