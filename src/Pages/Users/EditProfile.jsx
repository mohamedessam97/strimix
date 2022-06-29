import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate ,useParams} from "react-router-dom";


const EditProfile=() =>{
    let history = useNavigate();
    const {id}=useParams();
    
    const [user, setUser] = useState({
      name: "",
      email: "",  
     password:""
    });
  
    const { name, email,password} = user;
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async e => {
      e.preventDefault();
      await axios.put(`http://localhost:3001/user/edit/`);
      history.push("/");
    };
    useEffect(()=>{
        loadUser()
     },[])
    const loadUser= async()=>{
        const result=await axios.get(`http://localhost:3000/users/${id}`)
        setUser(result.data)
    }

    return (
        <>
         {/* <h1>Add Profile</h1>  */}
         <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User Data</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Password"
              name="password"
              value={password}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning">Update Profile</button>
        </form>
      </div>
    </div>
        </>
    );
}

export default EditProfile;