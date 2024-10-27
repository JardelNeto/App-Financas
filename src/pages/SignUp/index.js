import { Platform, Keyboard, ActivityIndicator } from "react-native";
import { useContext, useState } from "react";

import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from "../SignIn/styles";

import { AuthContext } from "../../contexts/auth";

export default function SignUp() {
  const { signUp, loadingAuth } = useContext(AuthContext);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    if (nome === "" || email === "" || password === ""){
      alert('Preencha todos os campos.')
      return;
    } 
    signUp(nome, email, password);
  }

  return (
    <Background
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <AreaInput>
          <Input
            placeholder="Digite nome"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Digite sua senha"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          {loadingAuth ? (
            <ActivityIndicator color="#FFF" size={20} />
          ) : (
            <SubmitText>Cadastrar</SubmitText>
          )}
        </SubmitButton>
      </Container>
    </Background>
  );
}
