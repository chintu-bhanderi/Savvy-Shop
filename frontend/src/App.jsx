import axios from 'axios'
import './App.css';
import React, { useState } from 'react'

function App() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    console.log(user);
  };

  const sethandler = async () => {

    const temp = await axios.post('http://localhost:5000/api/user/shopkeeperregister', user);

    console.log(temp.data);
  }
  
  return (
    <div className="App">
      Email : <input
        type="email"
        name="email"
        class="form-control"
        value={user.email}
        onChange={handleChange}
        required
      />
      Password : <input
        type="password"
        name="password"
        className="form-control"
        value={user.password}
        onChange={handleChange}
        required
      />
      <button onClick={sethandler}>Submit</button>
    </div>
  );
}

export default App;
