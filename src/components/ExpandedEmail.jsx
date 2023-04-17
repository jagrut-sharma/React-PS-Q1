import { useParams } from "react-router-dom";

import { useEmailContext } from "../context/EmailContext";

export default function ExpandedEmail() {
  const { inboxMails } = useEmailContext();
  const { emailID } = useParams();

  if (!inboxMails.length) return <h1>Loading...</h1>;

  const findEmail = function (emailList, emailID) {
    return emailList.find(({ id }) => id === +emailID);
  };

  const email = findEmail(inboxMails, emailID);

  return (
    <div>
      <h1>{email.subject}</h1>
      <p>From: {email.sender}</p>
      <p>Message: {email.message}</p>
    </div>
  );
}
