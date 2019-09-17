import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'
import RowLayout from './components/RowLayout'
import Row from './components/Row'
import datos from './data/sales.json'

class App extends Component {
  
  render(){
    const DATA = datos

    return (
        <RowLayout title='Sales'>
          <FlatList 
            data={DATA} 
            ListEmptyComponent={() => <Text>No hay elementos en la lista</Text>}
            renderItem={({item}) => <Row {...item}/>}
            keyExtractor={item => item.id}/>
        </RowLayout>      
    )
  }
}

export default App