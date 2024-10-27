import styled from "styled-components";

export const Container = styled.View`
  background-color: #f0f3ff;
  border-radius: 4px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 14px;
  padding: 12px;
`;

export const Tipo = styled.View`
  flex-direction: row;
`;

export const IconView = styled.View`
  flex-direction: row;
  background-color: ${(props) =>
    props.tipo === "despesa" ? "#c62c36" : "#049301"};
  padding-bottom: 4px;
  gap: 5px;
  padding-top: 4px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
`;

export const TipoText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-style: italic;
`;

export const ValorText = styled.Text`
  color: #121212;
  font-size: 20px;
  margin-top: 5px;
`;

export const DescriptionText = styled.Text`
  color: #121212;
  margin-top: 10px;

  font-size: 15px;
  font-style: italic;
`;
