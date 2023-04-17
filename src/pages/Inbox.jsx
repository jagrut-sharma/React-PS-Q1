import { NavLink } from "react-router-dom";

import { useEmailContext } from "../context/EmailContext";

export default function Inbox() {
  const { inboxMails, readEmails, readHandler } = useEmailContext();

  return (
    <div>
      <h1>Inbox</h1>
      <p>Unread Emails: {inboxMails.length - readEmails}</p>
      <p>Read Emails: {readEmails}</p>
      <NavLink to="/">Home</NavLink>
      <ul>
        {inboxMails.length ? (
          inboxMails.map(({ id, subject, read }) => {
            return (
              <li key={id}>
                <NavLink to={`/inbox/${id}`}>{subject}</NavLink>
                <button
                  style={{ margin: "0.5rem " }}
                  onClick={() => readHandler(id)}
                >
                  {read ? "Mark as Unread" : "Mark as read"}
                </button>
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
