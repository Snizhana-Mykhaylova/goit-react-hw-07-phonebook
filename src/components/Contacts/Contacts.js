import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './contacts.module.css';
import * as actions from '../../redux/phonebook/phonebook-actions';

const phoneFormatter = require('phone-formatter');

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li className={styles.contactItem} key={contact.id}>
          {contact.name}:
          <span className={styles.number}>
            {phoneFormatter.format(contact.number, 'NNN-NN-NN')}
          </span>
          <button
            className={styles.button}
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const getFilteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => {
  const { contacts, filter } = state.phonebook;
  const filteredContacts = getFilteredContacts(contacts, filter);

  return { contacts: filteredContacts };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
