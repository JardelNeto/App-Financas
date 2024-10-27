import { useContext } from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

import { Container, Titulo, ButtonMenu } from "./style";

export default function Header({ title }) {
    const navigation = useNavigation()

  return (
    <Container>
      <ButtonMenu onPress={() => navigation.openDrawer()}>
        <Icon name="align-left" size={30} color="#121212" />
      </ButtonMenu>
      {title && <Titulo>{title}</Titulo>}
    </Container>
  );
}
