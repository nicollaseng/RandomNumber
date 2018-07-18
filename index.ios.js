import React from 'react'
import {
  Text,
  AppRegistry,
  View,
  Button,
  StyleSheet
} from 'react-native'

const gerarNumeroAleatorio = () => {
  var numeroAleatorio = Math.random()
  numeroAleatorio = Math.floor(numeroAleatorio*10)
  alert(numeroAleatorio)
}

const App = () => {
  return (
    <View>
      {alert('olá')}
      <Text>Gerador de Número Aleatório</Text>
      <Button
        title="Gerar"
        onPress={gerarNumeroAleatorio}
       />
    </View>
  )
}

AppRegistry.registerComponent('app1', () => App)
