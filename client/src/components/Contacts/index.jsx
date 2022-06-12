import React, { useState} from 'react'
import { useEffect } from 'react';
import './Contacts.css'
import { NavLink } from 'react-router-dom';
import userIcon from './user-icon.png';

const Contacts = () => {

    const [contactList, setContactList] = useState([]);

    const  getContacts = async() => { 
        const response = await fetch(' https://localhost:7235/api/contacts');
        const data = await response.json();
        return data;
    }

    useEffect(() => {
        getContacts()
            .then(res => setContactList(res))
            .catch(err => { alert('There has been an error while loading the contacts: '+ err) })
    }, [contactList])
    

    const handleDeleteContact = (id) => { 
        fetch(`https://localhost:7235/api/contacts/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            }
        )
        .then(res => console.log(res))
        .catch(err => { alert('There has been an error while updating the contact: '+ err) })
    }

    return (
        <div>
            <div className='contacts-container'>
                {contactList.map((contact) => 
                <div className='contact-card' key={contact.id}>
                    <img src={ userIcon } alt="user icon" className='user-icon-img'/>
                    <div className='contact-info'>
                        <h6>Username</h6>
                        <h2>{contact.username}</h2>
                    </div>
                    <div className='contact-info'>
                        <h6>Email</h6>
                        <h2>{contact.email}</h2>
                    </div>
                    <div className='contact-info'>
                        <h6>Teléfono</h6>
                        <h2>{contact.telefono}</h2>
                    </div>
                    <div className='contact-controls'>
                        <NavLink to={`/update/${contact.id}`}><button className='modify-btn'>Modificar Usuario</button></NavLink>
                        <button onClick={()=>handleDeleteContact(contact.id)} className='delete-btn'>Eliminar Usuario</button>
                    </div>
                    
                </div>
            )}
            </div>
            
        </div>
  )
}

export default Contacts