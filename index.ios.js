import React from 'react'
import {
  Text,
  AppRegistry,
  View,
  Button,
  StyleSheet
} from 'react-native'

const estilo = {
  text: {
    fontSize:50,
    backgroundColor: '#0099e6',
    color: 'white',
    padding: 20,
    textAlign: 'center',
    shadowColor: '#d9d9d9',
    shadowOffset: {width:0, height:10},
    shadowOpacity: 1,
    shadowRadius: 1,
    marginVertical: 25
  },
  buton: {
    height:100,
  }
}

const gerarNumeroAleatorio = () => {
  var numeroAleatorio = Math.random()
  numeroAleatorio = Math.floor(numeroAleatorio*10)
  alert(`O numero sorteado foi: ${numeroAleatorio}`)
}

const App = () => {
  return (
    <View>
      {alert('Olá seja bem-vindo ao Par ou Impar v1. Desenvolvedor: Nicollas Linhares')}
      <Text style={estilo.text}>Par ou Impar</Text>
      <Button
        title="Gerar"
        onPress={gerarNumeroAleatorio}
        sytle={estilo.buton}
       />
    </View>
  )
}

AppRegistry.registerComponent('app1', () => App)
