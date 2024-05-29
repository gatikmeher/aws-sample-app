import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Users List</h1>
      <ul>
      <table border="1" width='80%' align='center'>
              <thead>
              <th width='10%'>Title</th>
              <th width='30%'>Name</th>
              <th width='20%'>Username</th>
              <th>Email</th>
              </thead>
        {users.map(user => (          
            
              <tbody>
                <td>{user.title}</td>
                <td>{user.first_name} {user.last_name}</td>                
                <td>{user.username}</td>
                <td>{user.email_address}</td>
              </tbody>              
                    
        ))}
        </table>  
      </ul>
    </div>
  );
}

export default App;

