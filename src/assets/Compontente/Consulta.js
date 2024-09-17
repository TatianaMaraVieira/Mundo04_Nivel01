// Tela de Consulta dos Fornecedores Cadastrados

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

function UserScreen() {

  const [users, setUsers] = useState([
    { id: 1, name: 'Ponto a ponto de Coração', photo: require('./assets/pontoaponto.png') },
    { id: 2, name: 'Maria Flor Laços', photo: require('./assets/lacos.png') },
    { id: 3, name: 'José Agua Potável', photo: require('./assets/agua.png') },
    { id: 4, name: 'Júlia Graphic Design', photo: require('./assets/gd.png') },
    { id: 5, name: 'Ana das Frutas', photo: require('./assets/frutas.png') },
    { id: 6, name: 'Enzo Radiadores', photo: require('./assets/radiador.png') },
    { id: 7, name: 'Fabio Auditor', photo: require('./assets/auditor.png') },
    { id: 8, name: 'Stilo com a Lilia', photo: require('./assets/roupas.png') },
    { id: 9, name: 'Bruce Music', photo: require('./assets/music.png') },
    { id: 10, name: 'Aline in the Book', photo: require('./assets/book.jpg') },
    { id: 11, name: 'Caio Bike', photo: require('./assets/bike.png') },
    { id: 12, name: 'Beto açai', photo: require('./assets/acai.jpg') },
    { id: 13, name: 'Caios', photo: require('./assets/caio.jpg') },
  ]);

  const handleUserPress = (userId) => {

    console.log(`Usuário ${userId} pressionado`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {users.map((user) => (
        <TouchableOpacity key={user.id} onPress={() => handleUserPress(user.id)}>
          <View style={styles.userContainer}>
            <Image source={user.photo} style={styles.userPhoto} />
            <Text style={styles.userName}>{user.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    marginTop:100,
    flexGrow: 1,
    justifyContent: 'center',

  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  userPhoto: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
  },
});

export default UserScreen;
