import { useSelector } from "react-redux";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredData = useSelector(selectFilteredContacts);
  // const filter = useSelector(selectFilter);
  
  // const filteredData = contacts.filter((item) =>
  //   item.name.toLowerCase().includes(filter.toLowerCase())
  // );
  return (
    <ul className={s.ul}>
      {filteredData.map((item) => (
        <Contact
          key={item.id}
          name={item.name}
          number={item.number}
          id={item.id}
        />
      ))}
    </ul>
  );
};

export default ContactList;
