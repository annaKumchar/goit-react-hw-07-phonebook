import { Form } from './Form/Form';
import { Section } from './Section/Section';
import { PhonebookWrap } from './Section/Section.styled';
import { List } from './List/List';
import { Filter } from './Filter/Filter';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectIsLoading, selectError } from 'redux/selector';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <PhonebookWrap>
        <Section title="Phonebook">
          <Form></Form>
        </Section>
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        {contacts.length > 0 && !isLoading && (
          <Section title="Contacts">
            <Filter />
            <List></List>
          </Section>
        )}
      </PhonebookWrap>
    </div>
  );
}
