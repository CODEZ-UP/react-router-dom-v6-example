import React, { useState } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  const handleChange = (e) => setUser(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/user/${user}`);
  }
  
  return (
    <>
      <Link to="user/codezup">Visit CodezUp User</Link>;
      <hr />
      <form onSubmit={handleSubmit}>
        <input placeholder="Enter Username" value={user} onChange={handleChange} />
        <button disabled={!user}>Go to User Page</button>
      </form>
      <hr />
      <Outlet />
    </>
  )};

export default Home;
