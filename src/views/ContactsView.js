// import { Wrapper } from "../components/Wrapper/Wrapper.styles"
import Form from "../components/Form";
import SectionTitle from "../components/SectionTitle";
import ContactsList from "../components/Contacts";
import Filter from "../components/Filter";
import {
  Container,
  ContainerAddContacts,
  ContainerContacts,
} from "./ContactsView.styles";

function ContactsView() {
  return (
    <Container>
      <ContainerContacts>
        <SectionTitle title="My contacts">
          <Filter />
          <ContactsList />
        </SectionTitle>
      </ContainerContacts>

      <ContainerAddContacts>
        <SectionTitle title="Add new contact">
          <Form />
        </SectionTitle>
      </ContainerAddContacts>
    </Container>
  );
}

export default ContactsView;
