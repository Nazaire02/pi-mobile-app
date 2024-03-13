import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function CardVote(props) {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Image source={require('../assets/candidats/candidat1.png')} style={styles.img}/>
                <View style={{marginLeft:7, width:'50%'}}>
                    <Text style={styles.text}>{props.candidat.nom}</Text>
                    <Text style={styles.text}>{props.candidat.prenoms}</Text>
                    <Text style={styles.text}>{props.candidat.anniversaire}</Text>
                    <Text style={styles.text}>{props.candidat.parti}</Text>
                    <Text style={styles.text}>{props.candidat.numCandidat}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.buttonField}>
                <Text style={styles.textButton}>Je vote</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width:'90%',
        height:'auto',
        paddingTop:10,
        paddingHorizontal:10,
        backgroundColor:'white',
        shadowColor:'#FF8200',
        shadowOffset:"0px 0px 7px",
        shadowOpacity:2,
        marginBottom:20,
        alignItems:'center'
    },
    img:{
        width:'50%',
        height:200
    },
    text:{
        color:'grey',
        fontWeight:'bold',
        fontSize:20,
        flexWrap:"wrap"
    },
    buttonField:{
        height:'auto',
        width:'40%',
        backgroundColor:"#FF8200",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        marginVertical:10,
        padding:10
    }, 
    textButton:{
        color:'#FFFFFF',
        fontWeight:'bold',
        fontSize:18,
    }
});
