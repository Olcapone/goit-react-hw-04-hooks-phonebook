//import React, {  useEffect, useState  } from "react";
import PropTypes from "prop-types";
import s from "./ContactForm.module.css";
import useLocalStorage from "../../utils/UseLocalStorage";

function ContactForm({ onSubmit }) {
  const [stateName, setName] = useLocalStorage("stateName", "");
  const [number, setNumber] = useLocalStorage("number", "");

  const reset = () => {
    setName("");
    setNumber("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ stateName, number });

    reset();
  };

  // render() {
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={stateName}
          onChange={handleChange}
        />
      </label>

      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>

      <button className={s.button} type="submit" onSubmit={reset}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  stateName: PropTypes.string,
  number: PropTypes.string,
};

export default ContactForm;
