import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import imc from './assets/Image/bmi.png';

export default function App() {
const [weight, setWeight] = useState('');
const [height, setHeight] = useState('');
const [result, setResult] = useState('');

const calculateBMI = () => {
const heightMeters = height / 100;
const bmi = weight / (heightMeters * heightMeters);
if (bmi >= 30) {
  setResult(`Your BMI is ${bmi.toFixed(2)}, which means you are overweight.`);
} else if (bmi >= 18.5 && bmi < 25) {
  setResult(`Your BMI is ${bmi.toFixed(2)}, which means you have a normal weight.`);
} else {
  setResult(`Your BMI is ${bmi.toFixed(2)}, which means you are underweight. Please seek medical advice and guidance to increase your weight.`);
}
};

return (
<View style={styles.container}>
<Image source={imc} style={styles.image} />
<Text style={styles.title}>BMI Calculator!</Text>
  <View style={styles.inputContainer}>
    <Text style={styles.label}>Enter your weight:</Text>
    <TextInput
      keyboardType='numeric'
      placeholder='number in kg'
      placeholderTextColor='rgba(255, 255, 255, 0.5)'
      style={styles.input}
      value={weight}
      onChangeText={setWeight}
    />
  </View>
  
  <View style={styles.inputContainer}>
    <Text style={styles.label}>Enter your Height:</Text>
    <TextInput
      keyboardType='numeric'
      placeholder='use chevron to separate height and centimeters'
      placeholderTextColor='rgba(255, 255, 255, 0.5)'
      style={styles.input}
      value={height}
      onChangeText={setHeight}
    />
  </View>
  
  <TouchableOpacity style={styles.button} onPress={calculateBMI}>
    <Text style={styles.buttonText}>Calculate</Text>
  </TouchableOpacity>
  
  {result !== '' && <View style={styles.resultContainer}>
    <Text style={styles.result}>{result}</Text>
  </View>}
  
  <StatusBar style="auto" />
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#1C1C1C',
alignItems: 'center',
justifyContent: 'center',
padding: 20,
},
image: {
	width: 200,
	height: 200,
},
title: {
fontSize: 24,
fontWeight: 'bold',
color: '#FFFFFF',
marginBottom: 20,
},
inputContainer: {
marginBottom: 20,
width: '100%',
},
label: {
fontSize: 18,
color: '#FFFFFF',
marginBottom: 10,
},
input: {
backgroundColor: '#2F2F2F',
color: '#FFFFFF',
borderRadius: 10,
paddingHorizontal: 20,
paddingVertical: 10,
fontSize: 16,
},
button: {
backgroundColor: '#2F2F2F',
padding: 10,
borderRadius: 10,
marginTop: 20,
},
buttonText: {
color: '#FFFFFF',
fontSize: 18,
fontWeight: 'bold',
},
resultContainer: {
	backgroungColor: '#2F2F2F',
	paddingVertical: 10,
	paddingHorizontal: 10,
	marginVertical: 25,
	color: '#fff',
},
result: {
	color: '#fff',
	fontSize: 18,
	fontWeight: 'bold',
	textAlign: 'center',
},
});