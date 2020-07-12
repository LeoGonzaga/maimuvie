import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 14;
`;

export const MoviesContainer = styled.View`
  flex: 1;
  width: 95%;
  background-color: #201f20;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  align-items: center;
`;

export const SearchBar = styled.View`
  flex-direction: row;
  padding: 30px;
  justify-content: flex-start;
`;

export const TextSearchBar = styled.TextInput`
  color: #fb8a00;
  padding: 10px;
  border: 1px solid #fb8a00;
  border-radius: 10px;
  margin-right: 10px;
`;

export const ButtonSearchBar = styled.TouchableOpacity`
  background-color: #fb8a00;
  height: 50px;
  width: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
