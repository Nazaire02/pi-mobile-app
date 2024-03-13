import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{color:'green', fontSize:30, fontWeight:'bold', textAlign:'center'}}>ELECTION MUNICIPALE-COMMUNE D'ABOBO</Text>
      <View style={styles.card}>
        <Text style={{textAlign:'center', color:'white', fontSize:30, fontWeight:'bold'}}>CONNEXION</Text>
        <Text style={{textAlign:'center', color:'white', fontSize:20, marginVertical:20}}>
            Entrez votre empreinte digitale pour accéder à votre espace de vote
        </Text>
        <Image source={require('../assets/empreinte.png')}/>
      </View>
      <Button title='valider' color="green" onPress={()=>navigation.navigate('SpaceVote')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    backgroundColor:'#FF8200',
    marginTop:'10%',
    alignItems:'center',
    padding:10,
    borderRadius:20
  }
});
