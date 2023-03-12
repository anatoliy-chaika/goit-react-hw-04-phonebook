import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import { Contactlist } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { FilterContacts } from 'components/Filter/Filter';
import { GlobalStyles } from 'components/GlobalStyles/GlobalStyles.styled';
import { Container } from 'components/Container/Container.styled';
import { MainTitle, SecondTitle } from './App.styled';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const changeFilterValue = e => {
    setFilter(e.currentTarget.value);
  };

  const addContact = newContact => {
    contacts.some(contact => contact.name === newContact.name)
      ? Notiflix.Report.failure(
          `${newContact.name}: is already in your contacts`
        )
      : setContacts(prevstate => [...prevstate, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  const getFilteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onSave={addContact} />
      <FilterContacts onChange={changeFilterValue} value={filter} />
      <SecondTitle>Contacts</SecondTitle>
      <Contactlist data={getFilteredContacts()} onDelete={deleteContact} />
      <GlobalStyles />
    </Container>
  );
};
