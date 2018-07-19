import React from 'react'
import {
  Text,
  AppRegistry,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert

} from 'react-native'

const estilo = {
  texto: {
    fontSize:50,
    backgroundColor: '#53ff1a',
    color: 'white',
    padding: 20,
    textAlign: 'center',
    shadowColor: '#d9d9d9',
    shadowOffset: {width:0, height:10},
    shadowOpacity: 1,
    shadowRadius: 1,
    // fontStyle: 'italic',
    fontWeight: 'bold'
   },
   estiloBotao: {
     backgroundColor: "white",
     padding:20,
     shadowColor: "#53ff1a",
     shadowOffset: {width:0, height:2},
     shadowOpacity: 0.5,
     borderColor: "#53ff1a",
     borderWidth: 0.5,
     borderRadius: 8
   },
   textoBotao: {
     fontSize: 30,
     color: "#53ff1a",
     fontWeight: 'bold',
     textAlign: 'center'
   },
   estiloGeral:{
     flex:0.1,
     justifyContent: "space-between",
     alignItems: 'stretch'
    },
    caixaImagem:{
      flex:0.1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    estiloImagem:{
      width:300,
      height:300
    }
  }

const gerarNumeroAleatorio = () => {
  var numeroAleatorio = Math.random()
  numeroAleatorio = Math.floor(numeroAleatorio*10)
  Alert.alert(`O numero sorteado foi: ${numeroAleatorio}`)
}

const App = () => {
  const {texto, estiloBotao, textoBotao, 
          estiloGeral, estiloImagem, caixaImagem} = estilo 
  return (
    <View style={estiloGeral}>
      {Alert.alert('Olá seja bem-vindo ao Par ou Impar v1. Desenvolvedor: Nicollas Linhares')}
      <Text style={texto}>Par ou Ímpar</Text>
      <View style={caixaImagem}>
        <Image source={{uri:"https://mundoeducacao.bol.uol.com.br/upload/conteudo_legenda/00e2122680d7d0ecc24c23f3c299a9dc.jpg"}}
                style={estiloImagem}/>
      </View>
      <TouchableOpacity style={estiloBotao} onPress={gerarNumeroAleatorio}>
        <Text style={textoBotao}>Gerar</Text>
      </TouchableOpacity>
      {/* <Button title="Gerar" onPress={gerarNumeroAleatorio} color="#841584"/> */}
    </View>
  )
}

AppRegistry.registerComponent('app1', () => App)
