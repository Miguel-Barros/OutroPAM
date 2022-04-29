import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Kit festa</Text>
    <View style={styles.description}>
      <Text style={styles.subTitle}><Text style={styles.bold}>Refrigerante:</Text> <Text style={styles.destaque}>600 ml</Text> por pessoa ;</Text>
      <Text style={styles.subTitle}><Text style={styles.bold}>Água:</Text> <Text style={styles.destaque}>200 ml</Text> por pessoa ;</Text>
      <Text style={styles.subTitle}><Text style={styles.bold}>Bolo:</Text> <Text style={styles.destaque}>100 gramas</Text> por pessoa ;</Text>
      <Text style={styles.subTitle}><Text style={styles.bold}>Doces em geral:</Text> <Text style={styles.destaque}>3 unidades</Text> por convidado ;</Text>
      <Text style={styles.subTitle}><Text style={styles.bold}>Salgadinhos:</Text> <Text style={styles.destaque}>10 unidades</Text> de salgadinhos por pessoa ;</Text>
    </View>

      <View style={styles.box}>
        <Text style={styles.p}>Quantidade de pessoas: </Text>
        <TextInput type="number" style={styles.input} />
      </View>
      <TouchableOpacity style={styles.btn} ><Text style={styles.btnTitle}>Calcular</Text></TouchableOpacity>
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
  box: {
    display: 'flex',
    flexDirection: 'row',
    margin: '1%'
  },
  input: {
    width: '5vw',
    textAlign: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 100,
    color: 'gray'
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
    color: '#53Fc'
  },
  p: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 600,
  },
  btn: {
    width: '10vw',
    height: '5vh',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 100,
    color: '#fff'
  }
});
