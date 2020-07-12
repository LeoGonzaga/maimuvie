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
} from 'react-native';
import styled from 'styled-components/native';
import {Container, Title, MoviesContainer} from '../Styles/GlobalStyle';

const Home: React.FC = () => {
  const [movies, setMovies] = useState([{}]);
  const [textMovie, setTextMovie] = useState('');
  const [rst, setRst] = useState(false);

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
      <MoviesContainer>
        <Text>alo</Text>
      </MoviesContainer>
    </Container>
  );

  // function Item({original_title, backdrop_path, overview, vote_average}) {
  //   return (
  //     <TouchableOpacity>
  //       <View style={{flex: 1, flexDirection: 'row'}}>
  //         <Image
  //           style={{height: 200, width: 140, marginBottom: 10}}
  //           source={{
  //             uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}`,
  //           }}
  //         />
  //         <View style={{margin: 10, width: 150, flexDirection: 'column'}}>
  //           <Text
  //             numberOfLines={2}
  //             style={{
  //               color: 'white',
  //               fontWeight: 'bold',
  //               textAlign: 'center',
  //             }}>
  //             {original_title}
  //           </Text>
  //           <Text
  //             numberOfLines={5}
  //             style={{
  //               padding: 5,
  //               color: 'white',
  //               fontSize: 10,
  //               flexWrap: 'wrap',
  //               textAlign: 'justify',
  //             }}>
  //             {overview}
  //           </Text>

  //           <View style={{height: 10, marginTop: 10, alignItems: 'center'}}>
  //             <Text style={{color: '#fff', fontSize: 10}}>Avaliação: 10</Text>
  //             <Text style={{color: '#fff', fontSize: 10}}>Votos: 10.000</Text>
  //             <TouchableOpacity
  //               style={{
  //                 backgroundColor: '#5953c0',
  //                 padding: 6,
  //                 margin: 10,
  //                 borderRadius: 5,
  //                 width: 100,
  //                 alignItems: 'center',
  //               }}>
  //               <Text style={{textAlign: 'center', color: '#fff'}}>
  //                 Favoritar
  //               </Text>
  //             </TouchableOpacity>
  //           </View>
  //         </View>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // }

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
