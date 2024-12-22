import * as Yup from 'yup';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PasswordScheme = Yup.object().shape({
  passwordLength: Yup.number().min(4).max(10).required(),
  confirmPassword: Yup.number().min(4).max(10).required(),
});

export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
