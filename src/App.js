//import { useState } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import useLocalStorage from "./utils/UseLocalStorage";

function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useLocalStorage("filter", "");

  const addContact = (props) => {
    const { stateName, number } = props;

    const newContact = {
      id: shortid.generate(),
      name: stateName,
      number: number,
    };

    const checkContact = contacts.find((contact) =>
      contact.name.includes(stateName)
    );

    if (checkContact) {
      alert("its contact already added");
    } else {
      setContacts([newContact, ...contacts]);
    }
  };

  const findContact = () => {
    const normalizetext = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizetext)
    );
  };

  const changeFilter = (e) => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const deleteContact = (name) => {
    setContacts(contacts.filter((contact) => contact.name !== name));
  };

  let visibleContact = filter.length === 0 ? contacts : findContact();

  return (
    <section className="mainSection">
      <h1 className="mainTitle">
        <span className="logo">P</span>honebook
      </h1>
      <ContactForm onSubmit={addContact} />

      <h2 className="mainTitle">Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList date={visibleContact} onDelete={deleteContact} />
    </section>
  );
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  filter: PropTypes.string,
};

export default App;
