import { Platform, Keyboard, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, ActivityIndicator } from "react-native";
import { useState, useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
} from "./styles";

export default function SignIn() {
  const navigation = useNavigation();
  const { signIn, loadingAuth } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (email === "" || password === "") {
      alert("Preencha suas informações.");
      return;
    }
    signIn(email, password);
  }

  return (
    <Background
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <Logo source={require("../../assets/Logo.png")} />

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

        <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
          {loadingAuth ? (
            <ActivityIndicator color="#FFF" size={20} />
          ) : (
            <SubmitText>Acessar</SubmitText>
          )}
        </SubmitButton>

        <Link>
          <Text style={{ fontSize: 16 }}>Não tem uma conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ fontSize: 16, color: "#0a66c2" }}>Cadastre-se</Text>
          </TouchableOpacity>
        </Link>
      </Container>
    </Background>
  );
}
