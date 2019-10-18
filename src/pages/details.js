import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    FlatList,
    Alert,
    Image,
  } from 'react-native';
import api from '../services/moviesService';

  export default class Details extends React.Component {

    static navigationOptions = {
      title: 'Detalhes do Filme',
      headerStyle: {
        backgroundColor: '#141414'
      },
      headerTintColor: '#FFF'
    }

    state ={
      details: {}
    }

    fetchMovieDetails (id) {
      api.get('/filmes/' + id).then(response => {
        this.setState({
          details: response.data
        })
      })
    }

    componentDidMount() {
      const movieId = this.props.navigation.getParam('movieId')
      this.fetchMovieDetails(movieId)
    }

    render() {
        return <ScrollView style={styles.view}>
                  <Text style={styles.title}>{this.state.details.titulo} </Text>
                  <Image style={styles.picture} 
                          source={{uri: this.state.details.imagem}}/>
                  <Text style={styles.year}>{this.state.details.ano} </Text>
                  <Text style={styles.director}>{this.state.details.diretor}</Text>
                  <Text style={styles.gender}>{this.state.details.genero}</Text>
                  <Text style={styles.rate}>{this.state.details.faixaEtaria}</Text>
                  <Text style={styles.rating}>{this.state.details.avaliacao}</Text>
                  <Text style={styles.summary}>{this.state.details.sinopse}</Text>
               </ScrollView>
    }    
  }
  const styles = StyleSheet.create({
    view:{
      backgroundColor: '#141414',
      padding: 20
    },
    title: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 36
    },
    picture: {
      flex: 1,
      height: 130,
      flexDirection: 'column',
      marginTop: 10,
      marginBottom: 10
    },
    year: {
      color: '#f2f2f2'
    },
    director: {
      color: '#f2f2f2'
    },
    gender: {
      color: '#f2f2f2'
    },
    rate: {
      color: '#f2f2f2'
    },
    rating: {
      color: '#f2f2f2'
    },
    summary: {
      color: '#f2f2f2'
    },
  })