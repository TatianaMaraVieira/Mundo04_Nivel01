//Tela de Cadastro dos Fornecedores com alert

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { Text, View, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import Consulta from './src/assets/Compontente/Consulta';

export default function Cadastro() {

  function handleConsulta() {
    console.log("Consultar lista de Fornecedores")
  }

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [produto, setProduto] = useState('');
  const [imagem, setImagem] = useState('');

  const handleCadastro = () => {
    
    if (nome && email && senha) {
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
    const handleConsulta = () => {
      navigation.navigate('Consultar', { nome });
    };
  };

  return (
    <View style={styles.container}>
      <Image style={{width: 150, height: 150}}
      source={require("./src/assets/cad.png")}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={text => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={text => setSenha(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Produto"
        value={produto}
        onChangeText={text => setProduto(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Imagem"
        value={imagem}
        onChangeText={Image => setImagem()}
      />

      <Button title="Cadastrar" onPress={handleCadastro} />

    <TouchableOpacity onPress={handleConsulta}>
      <Text style={{marginTop:150}}>Consultar</Text>
    </TouchableOpacity>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

