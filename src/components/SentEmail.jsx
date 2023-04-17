import { useParams } from "react-router-dom";

import { useEmailContext } from "../context/EmailContext";

export default function SentEmail() {
  const { sentMails } = useEmailContext();
  const { emailID } = useParams();

  if (!sentMails.length) return <h1>Loading...</h1>;

  const findEmail = function (emailList, emailID) {
    return emailList.find(({ id }) => id === +emailID);
  };

  const email = findEmail(sentMails, emailID);

  return (
    <div>
      <h1>{email.subject}</h1>
      <p>To: {email.to}</p>
      <p>Message: {email.message}</p>
    </div>
  );
}
