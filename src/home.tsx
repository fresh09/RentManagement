import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <Link to="/signin">Sign In</Link>
        <br />
        <Link to="/signup">Sign Up</Link>
        <br />
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <Outlet />
    </>
  );
}
