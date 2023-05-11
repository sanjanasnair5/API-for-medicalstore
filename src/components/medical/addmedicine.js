import axios from "axios";
import { useState } from "react";
import { useNavigate} from 'react-router-dom';
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import checkAuth from "../auth/checkAuth";

function Addmedicine() {
    const user = useSelector(store=>store.auth.user);
    const [name, setname] = useState('');
    const [company, setCompany] = useState('');
    const [expiry_date, setexpiry_date] = useState('');
    const navigate = useNavigate();
   

    function addPost() {
      
        
             axios.post('https://medicalstore.mashupstack.com/api/medicine',{
            
            name: name,
            company: company,
            expiry_date:expiry_date,
        },    
        {headers:{'Authorization':`Bearer ${user.token}`}})
        .then(response=>{
            
            
               navigate('/medical/medicine');
               
        })
        
    }
    return (<div>
        <Navbar></Navbar>
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1 className="text-center">Create medicine</h1>
                    <div className="form-group">
                        <label>name:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={name} 
                        onChange={(event)=>{setname(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Company:</label>
                        <textarea 
                        className="form-control" 
                        value={company} 
                        onChange={(event)=>{setCompany(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>expiry_date:</label>
                        <input type="date"
                        className="form-control" 
                        
                        value={expiry_date} 
                        onChange={(event)=>{setexpiry_date(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                    <button className="btn btn-primary float-right" onClick={addPost}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default checkAuth(Addmedicine);