import React from 'react';
import { View } from 'react-native';

// IMPORTAÇÃO DE ESTILOS 
import { styles } from './styles';
import { COLORS } from '../../theme';

// IMPORTAÇÃO DAS HOOKS
import { useAuth } from '../../hooks/auth'

// IMPORTAÇÃO DOS COMPONENTES
import { Button } from '../Button'


export function SignInBox(){
  const { signIn } = useAuth()

  return (
    <View style={styles.container}>
        <Button
        title="ENTRAR COM O GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
    />

    </View>
  );
}