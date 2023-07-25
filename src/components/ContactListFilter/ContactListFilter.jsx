import PropTypes from 'prop-types';

import {FilterLabel,FilterTitle} from './ContactListFilter.Styled'
export const ContactListFilter = ({setFilter,filter}) => {
    return (
        <>
        <FilterTitle>Contacts</FilterTitle>
        <FilterLabel>
          Find contacts by name
          <input
            onChange={setFilter}
            type="text"
            name="filter"
            value={filter}
          />
        </FilterLabel>
        </>
    )
}
ContactListFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
}