import React, {useState, useEffect} from 'react';
import { useParams, NavLink } from 'react-router-dom';
import updateIcon from './update-icon.png'
import './UpdateContact.css'

const UpdateContact = () => {

  const [contact, setContact] = useState({
    username: '',
    email: '',
    telefono:''
  })

  const [response, setResponse] = useState();

  const { id } = useParams();

  const  getContact = async() => { 
        const response = await fetch(`https://localhost:7235/api/contacts/${id}`);
        const data = await response.json();
        return data;
    }

  useEffect(() => {
    getContact()
            .then(res => setContact(res))
            .catch(err => { alert('There has been an error while loading the contact: '+ err) })
  }, [])

  
  const handleInputChange = (e) => {
    setContact(({
      ...contact, 
      [e.target.name]: e.target.value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://localhost:7235/api/contacts/${id}`,
      {
        method: 'PUT',
        headers: {
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({username: contact.username, email: contact.email, telefono: contact.telefono})
      }
    )
      .then(res => setResponse(res))
      .catch(err => { alert('There has been an error while updating the contact: '+ err) })
  }

  return (
  <>
    {!response &&
    <div className='update-form-container'>
      <img src={updateIcon} alt="update icon" className='update-icon'/>
      <form onSubmit={handleSubmit} className='update-form'>
        <div className='input-container'>
          <label for='username'>Username</label>
          <input
          type="text"
          name="username"
          placeholder="username"
          value={contact.username}
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
          value={contact.email}
          onChange={ handleInputChange}
            required
          />
        </div>
        <div className='input-container'>
          <label for='email'>Teléfono</label>
          <input
              type="number"
              name="telefono"
              placeholder="telefono"
            value={contact.telefono}
            onChange={ handleInputChange}
              required
            />
        </div>
          <input
            type="submit"
            value="Modificar Usuario"
            className="update-finish-btn"
          />
        </form>
    </div >
      }
      {response &&
        <div className='success-update'>
          <h2>Se realizó la modificación del contacto</h2>
          <h2>Vuelve a la lista de contactos desde <NavLink to={'/'} className='back-link'>aquí</NavLink></h2>
        </div>
      }
    </>
  )
}

export default UpdateContact