import { useEmailContext } from "../context/EmailContext";

import { NavLink } from "react-router-dom";

export default function Sent() {
  const { sentMails } = useEmailContext();

  return (
    <div>
      <h1>Sent</h1>
      <NavLink to="/">Home</NavLink>
      <ul>
        {sentMails.length ? (
          sentMails.map(({ id, subject }) => {
            return (
              <li key={id}>
                <NavLink to={`/sent/${id}`}>{subject}</NavLink>
              </li>
            );
          })
        ) : (
          <h1>Loading....</h1>
        )}
      </ul>
    </div>
  );
}
