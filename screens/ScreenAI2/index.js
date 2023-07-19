import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, Linking } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {// handle login functionality
  };

  const handleForgotPassword = () => {
    Linking.openURL("https://example.com/forgot-password");
  };

  return <ImageBackground source={{
    uri: "https://tinyurl.com/42evm3m3"
  }} style={styles.background}>
      <View style={styles.container}>
        <Image source={{
        uri: "https://tinyurl.com/4j8z8z5c"
      }} style={styles.avatar} />
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
        <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>;
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    paddingHorizontal: 20,
    alignItems: "center"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff"
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: "100%"
  },
  button: {
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginTop: 20,
    width: "100%"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 10
  },
  forgotPasswordText: {
    color: "#fff",
    textDecorationLine: "underline"
  }
});
export default LoginScreen;