import React from 'react'
import {
  Text,
  AppRegistry,
  View,
  Button
} from 'react-native'

const gerarNumeroAleatorio = () => {
  var numeroAleatorio = Math.floor(Math.random()*10)
}

const App = () => {
  return (
    <View>
      {alert('Seja Bemvindo')}
      <Text>Gerador de Número Aleatório</Text>
      <Button
        title="Gerar"
        onPress={gerarNumeroAleatorio}
       />
    </View>
  )
}

AppRegistry.registerComponent('app1', () => App)