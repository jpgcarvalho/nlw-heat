import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

// IMPORTAÇÃO DE ESTILOS 
import { styles } from './styles';
import { COLORS } from '../../theme';

// IMPORTAÇÃO DOS COMPONENTES
import { Button } from '../Button';


export function SendMessageForm(){

  const [message, setMessage] = useState("")
  const [sendingMessage, setSendingMessage] = useState(false)

  return (
    <View style={styles.container}>
        <TextInput
            keyboardAppearance="dark"
            placeholder="Qual sua expectativa para o evento?"
            placeholderTextColor={COLORS.GRAY_PRIMARY}
            multiline
            maxLength={140}
            onChangeText={setMessage}
            value={message}
            editable={!sendingMessage}
            style={styles.input}
        />

        <Button
            title="ENVIAR MENSAGEM"
            backgroundColor={COLORS.PINK}
            color={COLORS.WHITE}
        />


    </View>
  );
}