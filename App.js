import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';

export default function App() {
  const [pessoas, setPessoas] = useState();
  const [result, setResult] = useState();

  function calc(){
    let refrigerante = (600 * pessoas), 
    agua = (200 * pessoas),
    bolo = (100 * pessoas),
    doces = (3 * pessoas),
    salgadinho = (10 * pessoas);
    setResult(
      "Refrigerante: "+refrigerante+"ml\n"
      +"Agua: "+agua+"ml\n"
      +"Bolo: "+bolo+"g\n"
      +"Doces: "+doces+" unidades\n"
      +"Salgadinhos: "+salgadinho+" unidades\n"
    );
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.main}>
        <Text style={styles.title}>Kit festa</Text>
        <View style={styles.description}>
          <Text style={styles.subTitle}><Text style={styles.bold}>Refrigerante:</Text> <Text style={styles.destaque}>600 ml</Text> por pessoa ;</Text>
          <Text style={styles.subTitle}><Text style={styles.bold}>Água:</Text> <Text style={styles.destaque}>200 ml</Text> por pessoa ;</Text>
          <Text style={styles.subTitle}><Text style={styles.bold}>Bolo:</Text> <Text style={styles.destaque}>100 gramas</Text> por pessoa ;</Text>
          <Text style={styles.subTitle}><Text style={styles.bold}>Doces geral:</Text> <Text style={styles.destaque}>3 unidades</Text> por convidado ;</Text>
          <Text style={styles.subTitle}><Text style={styles.bold}>Salgadinhos:</Text> <Text style={styles.destaque}>10 unidades</Text> de salgadinhos por pessoa ;</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.p}>Quantidade de pessoas: </Text>
          <TextInput type="number" style={styles.input} value={pessoas} maxLength={3} onChangeText={(value) => setPessoas(value)} />
        </View>
        <TouchableOpacity style={styles.btn} onPress={calc}><Text style={styles.btnTitle}>Calcular</Text></TouchableOpacity>
        <Text style={styles.subTitle}>{result}</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    padding: '50px',
    backgroundColor: '#202020',
    borderColor: '#fff',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    margin: '1%'
  },
  input: {
    width: '10vw',
    maxWidth: '50px',
    textAlign: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 100,
    color: '#0fffcc'
  },
  title: {
    fontSize: 36,
    color: "#fff",
    fontWeight: 500,
    margin: '1%'
  },
  subTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: 500,
  },
  btnTitle: {
    fontSize: 15,
    color: "#fff",
    fontWeight: 500,
  },
  bold: {
    color: '#9c9c9c',
    fontWeight: 700
  },
  destaque: {
    color: '#0fffcc'
  },
  p: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 600,
  },
  btn: {
    width: '20vw',
    height: '5vh',
    maxWidth: '100px',
    maxHeight: '50px',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 100,
    color: '#fff',
    marginBottom: 3
  },
  description: {
    margin: '5%'
  }
});
