import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, username, email, website } = user;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{username}</p>
        <p>{email}</p>
        <p>{website}</p>

        <Link to={`/users/${id}`}>
        <button className="btn btn-primary">Show details</button>
        </Link>
      </div>
    </div>
  );
};

export default User;
