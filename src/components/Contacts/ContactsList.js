import { ItemContact, BtnDelete } from "./ContactsList.styles";
import { MdDelete } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { contactsOperations, selectors } from "redux/contacts";

export default function ContactsList() {
  const contactList = useSelector(selectors.getFilterContacts);
  const status = useSelector(selectors.getStatus);
  const error = useSelector(selectors.getError);
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const onDelete = idContact =>
    dispatch(contactsOperations.deleteContacts(idContact));

  if (status === "idle") {
    return null;
  }

  if (status === "rejected") {
    return <p>{`${error}`}</p>;
  }

  if (status === "resolved") {
    if (contactList.length === 0) {
      return <p>no contacts</p>;
    } else {
      return (
        <ul>
          {contactList.map(contact => (
            <ItemContact key={contact.id}>
              <div>
                <RiUser3Line size={14} style={{ marginRight: 10 }} />
                {contact.name}: {contact.number}
              </div>
              <BtnDelete type="submit" onClick={() => onDelete(contact.id)}>
                delete
                <MdDelete
                  size={16}
                  color="#8919FA"
                  style={{ marginLeft: 10 }}
                />
              </BtnDelete>
            </ItemContact>
          ))}
        </ul>
      );
    }
  }
}
