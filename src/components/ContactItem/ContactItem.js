import PropTypes from 'prop-types';
import { LiItem, ButtonDel } from './ContactItem.styled';
import { AiOutlineDelete } from 'react-icons/ai';
export const ContactItem = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <LiItem>
      <p>
        {name}: {number}
      </p>
      <ButtonDel type="button" onClick={() => onDelete(id)}>
        Delete <AiOutlineDelete />
      </ButtonDel>
    </LiItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
