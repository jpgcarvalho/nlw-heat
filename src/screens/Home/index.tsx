import React from 'react';
import { View, Text } from 'react-native';

// IMPORTAÇÃO DE ESTILOS
import { styles } from './styles';

// IMPORTAÇÃO DE COMPONENTES
import { Header } from '../../components/Header'
import { MessageList } from '../../components/MessageList'
import { SignInBox } from '../../components/SignInBox'
import { SendMessageForm } from '../../components/SendMessageForm';

export function Home(){
  return (
    <View style={styles.container}>
      <Header />
      <MessageList />
      <SignInBox />
    </View>
  );
}