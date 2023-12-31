/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export function EducationForm({newEducation, currentEducation}) {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newID = uuidv4();
        setInputs(values => ({...values, uid: newID}))
        console.log(inputs)
        if (currentEducation.length < 0) {newEducation(inputs)}
        else {
        newEducation(() => [...currentEducation, inputs])}
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
                required
            />
            <label>Qualification</label>
                <input 
                type="text" 
                name="qual" 
                value={inputs.qual || ""} 
                placeholder='Bachelor of Arts (Gender Studies)'
                onChange={handleChange}
                autoComplete='no'
                required
                />
            <div className="dateBox">
            <label>From:</label>
                <input 
                    type="year" 
                    name="from" 
                    value={inputs.from || ""} 
                    placeholder='2000'
                    onChange={handleChange}
                    autoComplete='year'
                    required
                />
            <label>To:</label>
                <input 
                    type="year" 
                    name="to" 
                    value={inputs.to || ""} 
                    placeholder='2005'
                    onChange={handleChange}
                    autoComplete='year'
                />
            </div>
            <input type="submit" />
        </form>
    )}