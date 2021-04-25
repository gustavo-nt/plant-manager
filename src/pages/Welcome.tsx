import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';
import wateringImg from '../assets/watering.png';

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentfication');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'} suas plantas de {'\n'} forma fácil
        </Text>

        <Image 
          source={wateringImg} 
          style={styles.img} 
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.8}
          onPress={handleStart}
        >
          <Text>
            <Feather 
              name="chevron-right" 
              style={styles.buttonIcon}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    wrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingHorizontal: 20
    },
    title: {
      fontSize: 28,
      textAlign: 'center',
      color: colors.heading,
      marginTop: 38,
      fontFamily: fonts.heading,
      lineHeight: 34
    },
    subtitle: {
      textAlign: 'center',
      fontSize: 18,
      paddingHorizontal: 20,
      color: colors.heading,
      fontFamily: fonts.text,
    },
    img: {
      height: Dimensions.get('window').width * .7
    },
    button: {
      backgroundColor: colors.green,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
      marginBottom: 10,
      height: 56,
      width: 56
    },
    buttonIcon: {
      color: colors.white,
      fontSize: 32
    }
});