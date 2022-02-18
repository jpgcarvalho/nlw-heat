import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// IMPORTAÇÃO DE SVG E PNG
import LogoSvg from '../../assets/logo.svg'

// IMPORTAÇÃO DO ESTILO
import { styles } from './styles';


// IMPORTAÇÃO DE COMPONENTE
import { UserPhoto } from '../UserPhoto';

export function Header(){
  return (
    <View style={styles.container}>
        <LogoSvg />

        <View style={styles.logoutButton}>
        <TouchableOpacity>
            <Text style={styles.logoutText}>
                Sair
            </Text>
        </TouchableOpacity>

        <UserPhoto imageUri='https://avatars.githubusercontent.com/u/56309566?v=4' />
        </View>
    </View>
  );
}