import styled from "styled-components/native";

export const Background = styled.TouchableWithoutFeedback`
  flex: 1;
  background-color: #f0f4ff;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 25px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  width: 90%;
  font-size: 17px;
  padding: 10px;
  border-radius: 8px;
  color: #121212;
  margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 8px;
  background-color: #3b3dbf;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const Link = styled.View`
  margin-top: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;