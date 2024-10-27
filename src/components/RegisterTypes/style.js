import styled from "styled-components";

export const RegisterContainer = styled.View`
  flex-direction: row;
  padding-left: 5%;
  padding-right: 5%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const RegisterTypeButton = styled.TouchableOpacity`
  background-color: ${props => props.checked ? "#FFF" : "#E7E7E7"};
  width: 47%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 45px;
  border-radius: 4px;
  border-width: 1.5px;
  margin-bottom: 14px;
  border-color:${props => props.checked ? "#000" : "transparent"};
`;

export const RegisterLabel = styled.Text`
  margin-left: 8px;
  font-size: 17px;
`;
