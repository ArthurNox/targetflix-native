import React from 'react'
import { View, Text, Button, TouchableHighlight, StyleSheet, Image } from 'react-native'

const MovieCard = ({ item, handleSelectMovie }) =>
    <View style={styles.movieCard}>
      <TouchableHighlight onPress={() => handleSelectMovie(item.id)}>
          <>
             <Image style={styles.picture} 
                  source={{ uri: item.imagem }} />
             <Text style={styles.movieTitle}>{item.titulo}</Text>
           </>
      </TouchableHighlight>
      {/* <Text style={styles.movieDescription}>{item.sinopse}</Text>
      <Button onPress={() => handleSelectMovie(item.id)} 
              title="Ver detalhes" /> */}
    </View>

const styles = StyleSheet.create({
    picture: {
        flex: 1,
        flexDirection: 'column',

        height: 120
    },
    movieCard: {
      borderRadius: 5,
      margin: 5,
      flex: 1,
      flexDirection: 'column'
    },
    movieTitle: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#fff'
    },
    movieDescription: {
      color: '#a2a2a2'
    }
})

export default MovieCard
