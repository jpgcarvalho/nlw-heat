import React from 'react';
import { ScrollView } from 'react-native';

// IMPORTAÇÃO DE ESTILOS 
import { styles } from './styles';

// IMPORTAÇÃO DOS COMPONENTES
import { Message } from '../Message';


export function MessageList(){
  const message = {
    id: '1',
    text: 'Mensagem de teste',
    user: {
        name: 'Peu',
        avatar_url: 'https://avatars.githubusercontent.com/u/56309566?v=4' 
    }
  } 

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
        <Message data={message} />
        <Message data={message} />
        <Message data={message} />

    </ScrollView>
  );
}