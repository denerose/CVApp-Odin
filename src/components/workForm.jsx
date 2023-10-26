/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export function WorkForm({setWork, currentWork}) {
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
        if (currentWork.length < 0) {setWork(inputs)}
        else {
        setWork(() => [...currentWork, inputs])}
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Work Experience</h2>
            <label>Workplace</label>
                <input 
                type="text" 
                name="org" 
                value={inputs.org || ""} 
                placeholder='Company Inc'
                onChange={handleChange}
                autoComplete='no'
                required
            />
            <label>Role Title</label>
                <input 
                type="text" 
                name="job" 
                value={inputs.job || ""} 
                placeholder='Job Title'
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
            <input type="submit"/>
        </form>

    )}