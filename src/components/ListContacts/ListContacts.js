import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/actions';
import { getVisibleContacts } from '../../redux/contacts/selectors';
import styles from './ListContacts.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);

  return (
    <ul className={styles.List}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={styles.Item} key={id}>
          <p className={styles.Text}>
            {name}: <span className={styles.Span}>{number}</span>
          </p>
          <button
            className={styles.Button}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
            title="Удалить"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
