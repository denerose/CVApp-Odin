/* eslint-disable react/prop-types */
import { useState } from "react";

export function EducationForm({newEducation, currentEducation}) {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
        newEducation((currentEducation) => [...currentEducation, inputs])
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Education</h2>
            <label>School/University</label>
                <input 
                type="text" 
                name="uni" 
                value={inputs.uni || ""} 
                placeholder='School of Hard Knocks'
                onChange={handleChange}
                autoComplete='no'
            />
            <input type="submit" />
        </form>
    )}