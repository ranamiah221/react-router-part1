import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user =useLoaderData();
    const {name, website}=user;
    const navigate=useNavigate();
    const handleGoBack=()=>{
        navigate(-1);
    }
    return (
        <div className="border-2 rounded-xl w-72">
            <h2 className="text-xl font-medium text-green-600">User details for : {name}</h2>
            <p>website : {website}</p>
            <button onClick={handleGoBack} className="btn btn-outline border-b-2">Go Back</button>
        </div>
    );
};

export default UserDetails;