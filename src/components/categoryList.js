import React, {Component} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import api from '../services/moviesService'
import MovieCard from '../components/movieCard';

export default class CategoryList extends Component {

    state = {
        categories: []
    }

    componentDidMount() {
        this.fetchAllCategoeies()
    }

    fetchAllCategoeies = () => {
        api.get('/categorias').then(response => {
            this.setState({
                categories: response.data
            })
        })
    }

    renderCategory = ({ item: category }) => {
        return <View key={category.descricao}>
        <Text style={styles.categoryTitle}>{category.descricao}</Text>
        <FlatList
            data={category.filmes}
            numColumns={2}
            keyExtractor={item => item.id.toString()}
            renderItem={this.renderCard} />
        </View> 
    }

    renderCard = ({ item }) => {
        return <MovieCard item={item} 
                          handleSelectMovie={(id) => this.props.handleGoToDetails(id)} />
      }

    render() {
        return <View>
                <FlatList 
                    data={this.state.categories}
                    keyExtractor={category => category.descricao}
                    renderItem={this.renderCategory} />
            </View>                   
    }
}
const styles = StyleSheet.create({
    categoryTitle: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
        textDecorationLine: 'underline'
    }
})