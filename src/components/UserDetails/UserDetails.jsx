import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user =useLoaderData();
    const {name, website}=user;
    return (
        <div className="border-2 rounded-xl">
            <h2 className="text-xl font-medium text-green-600">User details for : {name}</h2>
            <p>website : {website}</p>
        </div>
    );
};

export default UserDetails;