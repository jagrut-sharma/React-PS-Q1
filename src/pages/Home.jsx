import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>My Mail Box</h1>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/inbox">Inbox</NavLink>
      </li>
      <li>
        <NavLink to="/sent">Sent</NavLink>
      </li>
    </div>
  );
}
