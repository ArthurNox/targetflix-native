import React from 'react';
import { StyleSheet,View } from 'react-native';
import CategoryList from '../components/categoryList';

export default class Home extends React.Component {
  static navigationOptions = {
      title: 'TARGET FLIX',
      headerStyle: {
        backgroundColor: '#141414'
      },
      headerTintColor: "#F00"
  }

  handleGoToDetails = (id) =>{
    this.props.navigation.navigate('Details', { movieId: id })
  }

  render () {
    return <View style={styles.body}>
      <CategoryList handleGoToDetails={this.handleGoToDetails}/>
      </View>
  }
};

const styles = StyleSheet.create({  
  body: {
    backgroundColor: '#141414',
    padding: 20
  },
  header: {
    padding: 20
  },
  headerTitle: {
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 36,
    letterSpacing: 3
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  movieList: {
    padding: 20,
  },
  
});
