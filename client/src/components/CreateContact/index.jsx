import React, { useState } from 'react';
import createIcon from './create-icon.png'
import './CreateContact.css'
import { NavLink } from 'react-router-dom';

const CreateContact = () => {

  const [newContact, setNewContact] = useState({
    username: '',
    email: '',
    telefono:''
  })

  const [response, setResponse] = useState();

  
  const handleInputChange = (e) => {
    setNewContact(({
      ...newContact, 
      [e.target.name]: e.target.value
    }))
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://localhost:7235/api/contacts/`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({username: newContact.username, email: newContact.email, telefono: newContact.telefono})
      }
    )
      .then(res => setResponse(res))
      .catch(err => { alert('There has been an error while updating the contact: '+ err) })
  }

  return (
    <>
    {!response &&
      <div className='create-form-container'>
      <img src={createIcon} alt="create icon" className='create-icon'/>
      <form onSubmit={handleSubmit} className='create-form'>
        <div className='input-container'>
          <label for='username'>Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={newContact.username}
            onChange={ handleInputChange}
              required
          />
        </div>
        <div className='input-container'>
          <label for='email'>Email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
          value={newContact.email}
          onChange={ handleInputChange}
            required
          />
        </div>
        <div className='input-container'>
          <label for='email'>Email</label>
          <input
            type="number"
            name="telefono"
            placeholder="telefono"
          value={newContact.telefono}
          onChange={ handleInputChange}
            required
          />
        </div>
          <input
            type="submit"
            value="Crear Usuario"
            className="create-finish-btn"
          />
        </form>
    </div>
    }
    {response &&
        <div className='success-update'>
          <h2>Se creó el contacto con éxito</h2>
          <h2>Vuelve a la lista de contactos desde <NavLink to={'/'} className='back-link'>aquí</NavLink></h2>
        </div>
      }
    </>
    
  )
}

export default CreateContact