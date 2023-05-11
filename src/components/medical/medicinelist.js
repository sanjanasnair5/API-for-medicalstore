import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Medicinelist(props) {
    const user = useSelector(store=>store.auth.user);
    function deletemedicine() {
        axios.delete('https://medicalstore.mashupstack.com/api/medicine/'+props.post.id,
        {headers:{'Authorization':`Bearer ${user.token}`}}).then(response=>{
           
            props.refresh()
        })
    }
    return <div className="card">
    <div className="card-body">
        {props.post.name}
      
        <button className="btn btn-primary float-right" onClick={deletemedicine}>Delete</button>
        <Link to={"/medical/medicine/"+props.post.id+"/edit"} className="btn btn-primary float-right">Edit</Link>
        <Link to={"/medical/medicine/"+props.post.id} className="btn btn-info float-right">View</Link>
    </div>
</div>
}
export default Medicinelist;