import { Component } from 'react';
import Notiflix from 'notiflix';
import { Contactlist } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { FilterContacts } from 'components/Filter/Filter';
import { GlobalStyles } from 'components/GlobalStyles/GlobalStyles.styled';
import { Container } from 'components/Container/Container.styled';
import { MainTitle, SecondTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({ contacts: parsedContacts });
      return;
    }
    this.setState({ contacts: [] });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    this.state.contacts.some(contact => contact.name === newContact.name)
      ? Notiflix.Report.failure(`${newContact.name}: is already in contacts`)
      : this.setState(prevstate => {
          return {
            contacts: [...prevstate.contacts, newContact],
          };
        });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  changeFilterValue = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const visibleContacts = this.getFilteredContacts();
    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onSave={this.addContact} />
        <FilterContacts
          onChange={this.changeFilterValue}
          value={this.state.filter}
        />
        <SecondTitle>Contacts</SecondTitle>
        <Contactlist data={visibleContacts} onDelete={this.deleteContact} />
        <GlobalStyles />
      </Container>
    );
  }
}
