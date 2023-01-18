import React from 'react';
import PropTypes from 'prop-types';
import { ListEl, ListItem, ListButton } from './List.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectVizibleContacts } from 'redux/selector';

export const List = () => {
  const dispatch = useDispatch();

  const vizibleContacts = useSelector(selectVizibleContacts);
  return (
    <ListEl>
      {vizibleContacts.map((contact, id) => (
        <ListItem key={id}>
          {contact.name}: {contact.phone}
          <ListButton
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </ListButton>
        </ListItem>
      ))}
    </ListEl>
  );
};

List.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
