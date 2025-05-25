import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'

const index = () => {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const handleLogin = () => {
    if (phone === '' || password === '') {
      alert('Please fill in all fields')
      return
    }
    if (phone === '0373007856' || password === '123') {
      router.push('/home')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Phone"
        keyboardType="phone-pad"
        onChangeText={setPhone}
        value={phone}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        style={styles.input}
      />
      <View style={styles.button}>
        <Button
          title="Login"
          color="#EF506A"
          onPress={() => {
            handleLogin();
          }}
        />
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginBottom: 150,
    backgroundColor: '#F2F2F2',
  },
  input: {
    height: 40,
    borderColor: '#BABABA',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '60%',
    borderRadius: 5,
    
  },
  button: {
    backgroundColor: '#EF506A',
    padding: 10,
    borderRadius: 5,
    width: '60%',

  },
  title: {
    fontSize: 40,
    marginBottom: 20,
    color: '#EF506A',
    fontWeight: 'bold',
  },
})