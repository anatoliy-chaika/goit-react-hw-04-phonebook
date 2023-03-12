import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { ItemList, Info } from './ContactList.styled';

export const Contactlist = ({ data, onDelete }) => {
  return data.length === 0 ? (
    <Info>Your Phonebook is empty now</Info>
  ) : (
    <ItemList>
      {data.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} function onDelete={onDelete} />
          </li>
        );
      })}
    </ItemList>
  );
};
Contactlist.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
