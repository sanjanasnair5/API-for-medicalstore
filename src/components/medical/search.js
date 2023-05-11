import axios from "axios";
import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Medicinelist from "./medicinelist";
import checkAuth from "../auth/checkAuth";
import { useSelector } from "react-redux";
//import './search.css';

function Listsearch() {
    const user = useSelector(store=>store.auth.user);
    var [posts, setPosts]=useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    const [loading, setLoading] = useState(false);
 
    function fetchPosts(){
        axios.get('https://medicalstore.mashupstack.com/api/medicine',
        {headers:{'Authorization':`Bearer ${user.token}`}}).then(response=>{
            setPosts(response.data);
            setLoading(false);
        
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
                    <h1 className="text-center my-4">search medicine</h1>
                </div>
                
                
                
            </div>
            <div className="row">
                <div className="col-8 offset-2">
                <input type="text" className="ser" placeholder="search medicine"
                onChange={(e) => setSearchTitle(e.target.value)}/>
                
                {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map(post =><Medicinelist key={post.id} post={post} refresh={fetchPosts}/>)
      )}
            
                </div>
            </div>
        </div>
    </div>)

}  

export default checkAuth(Listsearch);