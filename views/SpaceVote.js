import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CardVote from '../components/CardVote';

export default function SpaceVote() {

  const allCandidats = [
    {
      nom: "N'DOUFFOU",
      prenoms: "Manda Nazaire",
      anniversaire: "19/03/1940",
      parti: "PDCI-RDA",
      numCandidat: "Candidat 1",
      picture: "../assets/candidats/candidat1.png"
    },
    {
      nom: "KANE",
      prenoms: "Cheick Moussa",
      anniversaire: "14/10/1970",
      parti: "RHDP",
      numCandidat: "Candidat 2",
      picture: "../assets/candidats/candidat1.png"
    },
    {
      nom: "TOURE",
      prenoms: "Lacina Junior",
      anniversaire: "23/07/1949",
      parti: "FPI",
      numCandidat: "Candidat 3",
      picture: "../assets/candidats/candidat1.png"
    },
    {
      nom: "YAPI",
      prenoms: "Christ",
      anniversaire: "30/01/1990",
      parti: "PPTE",
      numCandidat: "Candidat 4",
      picture: "../assets/candidats/candidat1.png"
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={{ color: 'green', fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>ELECTION MUNICIPALE-COMMUNE D'ABOBO</Text>
      <ScrollView>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          {allCandidats.map((candidat, index) => (
            <CardVote key={index} candidat={candidat} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '12%',
  },
});
