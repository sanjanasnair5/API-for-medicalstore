import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import checkAuth from "../auth/checkAuth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Editmedicine() {
    const user = useSelector(store=>store.auth.user);
    const {postId} = useParams();
    const [name, setname] = useState('');
    const [company, setCompany] = useState('');
    const [expiry_date, setexpiry_date] =useState('');
    var navigate = useNavigate()
    useEffect(()=>{
        axios.get('https://medicalstore.mashupstack.com/api/medicine/' +postId,
        {headers:{'authorization':`Bearer ${user.token}`}}).then(response=>{
            setname(response.data.name);
            setCompany(response.data.company);
            setexpiry_date(response.data.expiry_date);
        })
    },[postId]);
    function updatemedicine(){
        axios.post('https://medicalstore.mashupstack.com/api/medicine/' +postId,{
            name: name ,
            company: company,
            expiry_date:expiry_date

        },{headers:{'Authorization':`Bearer ${user.token}`}}).then(response=>{
           
           
                navigate('/medical/medicine');
            
        })
    }
    return <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1 className="text-center">Edit Medicine</h1>
                    <div className="form-group">
                        <label>Title:</label>
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
                        <label>expiry_date</label>
                        <textarea 
                        className="form-control" 
                        value={expiry_date} 
                        onChange={(event)=>{setexpiry_date(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right" onClick={updatemedicine}>Submit</button>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
}

export default checkAuth(Editmedicine);