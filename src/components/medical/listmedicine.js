import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Medicinelist from "./medicinelist";
import checkAuth from "../auth/checkAuth";
import { useSelector } from "react-redux";
//import './search.css';

function Listmedicine() {
    const user = useSelector(store=>store.auth.user);
    var [posts, setPosts]=useState([]);
 
    function fetchPosts(){
        axios.get('https://medicalstore.mashupstack.com/api/medicine',
        {headers:{'Authorization':`Bearer ${user.token}`}}).then(response=>{
            setPosts(response.data)
        
        })

    }
    useEffect(()=>{
        fetchPosts()
    },[])
    
       
        return (<div>
        <Navbar></Navbar>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center my-4">medicine</h1>
                </div>
                
              
                
            </div>
            <div className="row">
                <div className="col-8 offset-2">
                    <Link to="/medical/medicine/add" className="btn btn-info mb-2">add medicine</Link>
                    {posts.map(post =><Medicinelist  post={post} refresh={fetchPosts}/>)}
                </div>
            </div>
        </div>
    </div>)
}

export default checkAuth(Listmedicine);