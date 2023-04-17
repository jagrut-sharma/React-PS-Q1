import { createContext, useState, useEffect, useContext } from "react";

import { fakeFetch } from "../API/fakeFetch";

const EmailContext = createContext({
  inboxMails: [],
  sentMails: [],
  readHandler: (id) => {},
  readEmails: null
});

export function EmailProvider({ children }) {
  const [inboxMails, setInboxMails] = useState([]);
  const [sentMails, setSentMails] = useState([]);

  const fetchEmailData = async () => {
    const res = await fakeFetch("https://example.com/api/allemails");
    const {
      data: { emails, sentEmails }
    } = res;
    setInboxMails(emails);
    setSentMails(sentEmails);
  };

  useEffect(() => {
    fetchEmailData();
  }, []);

  const readEmails = inboxMails.reduce(
    (count, { read }) => count + Number(read),
    0
  );

  const readHandler = (id) => {
    setInboxMails(
      inboxMails.map((mail) => {
        return mail.id === id ? { ...mail, read: !mail.read } : mail;
      })
    );
  };

  const emailContext = {
    inboxMails,
    sentMails,
    readEmails,
    readHandler
  };

  return (
    <EmailContext.Provider value={emailContext}>
      {children}
    </EmailContext.Provider>
  );
}

export const useEmailContext = () => useContext(EmailContext);
