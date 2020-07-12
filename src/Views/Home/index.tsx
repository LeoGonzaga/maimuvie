import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Dimensions,
  Keyboard,
} from 'react-native';
import styled from 'styled-components/native';
import {
  Container,
  Title,
  MoviesContainer,
  SearchBar,
  TextSearchBar,
  ButtonSearchBar,
} from '../Styles/GlobalStyle';

const Home: React.FC = () => {
  const [movies, setMovies] = useState([{}]);
  const [textMovie, setTextMovie] = useState('');
  const [rst, setRst] = useState(false);
  const width = Dimensions.get('window');

  const getMovies = async () => {
    let response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=48c278a59589fa593d4cbec3598fec19',
    );
    let resJSON = await response.json();
    console.log(resJSON.results);
    setMovies(resJSON.results);
  };

  const searchMovie = async (movie) => {
    let response;
    console.log(movie);
    if (!movie) {
      Alert.alert('Ops!', 'Digite o filme para prosseguir');
      setRst(true);
    }
    response = await fetch(
      'https://api.themoviedb.org/3/search/movie?api_key=48c278a59589fa593d4cbec3598fec19&query=' +
        movie,
    );
    let resJSON = await response.json();
    console.log(resJSON.results);
    setMovies(resJSON.results);
  };

  useEffect(() => {
    getMovies();
    setRst(false);
  }, [rst]);
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Container>
      <Title>Bem vindo(a), Léo!</Title>
      <SearchBar>
        <TextSearchBar
          placeholder="Pesquise por filmes, séries ou animes"
          onChangeText={(text) => setTextMovie(text)}
          onSubmitEditing={() => {
            searchMovie(textMovie);
          }}
        />
        <ButtonSearchBar
          onPress={() => {
            searchMovie(textMovie);
            Keyboard.dismiss();
          }}>
          <Image source={require('../../Assets/search.png')} height={100} />
        </ButtonSearchBar>
      </SearchBar>
      <MoviesContainer>
        <FlatList
          data={movies}
          renderItem={({item}) => (
            <Item
              original_title={item.original_title}
              backdrop_path={item.backdrop_path}
              overview={item.overview}
              vote_average={item.vote_average}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </MoviesContainer>
    </Container>
  );

  function Item({original_title, backdrop_path, overview, vote_average}) {
    return (
      <TouchableOpacity>
        <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
          <Image
            style={{
              height: 136,
              width: 130,
              marginBottom: 10,
              borderRadius: 10,
            }}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}`,
            }}
          />
          <View style={{margin: 10, width: 170, flexDirection: 'column'}}>
            <Text
              numberOfLines={1}
              style={{
                color: '#fb8a00',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 23,
                textTransform: 'uppercase',
              }}>
              {original_title}
            </Text>
            <Text
              numberOfLines={5}
              style={{
                flex: 1,
                color: 'white',
                fontSize: 10,
                textAlign: 'justify',
              }}>
              {overview}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  // return (
  //   <View
  //     style={{
  //       flex: 1,
  //       backgroundColor: '#fff',
  //     }}>
  //     <SafeAreaView>
  //       <TextInput
  //         style={{
  //           padding: 5,
  //           backgroundColor: '#171539',
  //           borderColor: '#171539',
  //           borderBottomColor: '#fff',
  //           borderWidth: 1,
  //           margin: 10,
  //           borderRadius: 4,
  //           color: '#fff',
  //           textAlign: 'center',
  //         }}
  //         value={textMovie}
  //         placeholderTextColor="#fff"
  //         onChangeText={(text) => setTextMovie(text)}
  //         placeholder="Buscar filme"
  //         onSubmitEditing={() => {
  //           searchMovie(textMovie);
  //         }}
  //       />
  //       <FlatList
  //         data={movies}
  //         renderItem={({item}) => (
  //           <Item
  //             original_title={item.original_title}
  //             backdrop_path={item.backdrop_path}
  //             overview={item.overview}
  //             vote_average={item.vote_average}
  //           />
  //         )}
  //         keyExtractor={(item, index) => index.toString()}
  //       />
  //     </SafeAreaView>
  //   </View>
  // );
};

export default Home;
