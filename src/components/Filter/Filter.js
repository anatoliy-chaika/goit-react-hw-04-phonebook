import PropTypes from 'prop-types';
import { FilterInput, FilterLabel } from './Filter.styled';

export const FilterContacts = ({ onChange, value }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      ></FilterInput>
    </FilterLabel>
  );
};

FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
