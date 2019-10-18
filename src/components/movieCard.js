import React from 'react'
import {View, Text, Button, Image, StyleSheet} from 'react-native'

const MovieCard = ({ item, handleSelectMovie }) => 
<View style={styles.movieCard}>
<Text style={styles.movieTitle}>{item.titulo}</Text>
<Text style={styles.movieDescription}>{item.sinopse}</Text>
<Button onPress={() => handleSelectMovie(item.id)}
    title="Ver detalhes" />
</View>

const styles = StyleSheet.create({
    movieCard: {
        backgroundColor: '#FFF',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5
      },
      movieTitle: {
        fontWeight: 'bold',
        fontSize: 24
      },
      movieDescription: {
        color: '#a2a2a2'
      }
})

export default MovieCard