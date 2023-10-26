import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export function InfoForm({setUserDataInput}) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs)
    setUserDataInput({
      name : inputs.name,
      email : inputs.email
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="name" 
        value={inputs.name || ""} 
        placeholder='Jane A. Doe'
        onChange={handleChange}
        autoComplete='name'
      />
      </label>
      <label>Enter your email:
        <input 
          type="email" 
          name="email" 
          value={inputs.email || ""} 
          placeholder='email@example.com'
          onChange={handleChange}
          autoComplete='email'
        />
        </label>
        <input type="submit" />
    </form>
  )
}

// eslint-disable-next-line react/prop-types
export function InfoCard({name, email}) {

  return (
    <div className='sectionCard'>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  )
}