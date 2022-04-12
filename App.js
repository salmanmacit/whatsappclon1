import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Svg, {Ellipse} from "react-native-svg";
import { EvilIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style={styles.barStyle} />
      <View style={styles.barStyle}>
        <View style={styles.barOrta}>
          <Text style={styles.logoText}>WhatsApp</Text>
          <View style={styles.icon}>
            <Ionicons style={styles.searchIcon} name="md-search" size={10} color="black" />
            <MaterialCommunityIcons style={styles.dotMenuIcon} name="dots-vertical" size={20} color="black" />
          </View>
        </View>
        <View style={styles.barAlt}>
          <FontAwesome5 style={styles.camera} name="camera" size={16} color="white" />
          <Text style={styles.textStyle}>SOHBETLER</Text>
          <Text style={styles.textStyle}>DURUM</Text>
          <Text style={styles.textStyle}>ARAMALAR</Text>
        </View>
      </View>
      <View style={styles.listitem}>
        <View style={styles.listRow}>
          <Image style={styles.resim} source={require("./assets/kopek.jpg")}></Image>
          <View style={styles.listData}>
            <Text style={styles.listTitle}> Salman MACİT</Text>
            <Text style={styles.listDesc}>Ok. Yarın görüşürüz</Text>
          </View>
          <Text style={styles.listDate}>Dün</Text>
        </View>
        <View style={styles.listRow}>
          <Image style={styles.resim} source={require("./assets/doga.jpg")}></Image>
          <View style={styles.listData}>
            <Text style={styles.listTitle}> Öğrenci Topluluğu</Text>
            <Text style={styles.listDesc}>Tamam teşekkürler</Text>
          </View>
          <Text style={styles.listDate}>Dün</Text>
        </View>
      </View>
      <View style={styles.sendMessageButton}>
        <Svg viewBox='0,0,70,70'>
          <Ellipse 
            strokeWidth={8} 
            fill="rgba(0,154,120,1)"
            cx={35}
            cy={35}
            rx={30}
            ry={30}
            stroke="white">
          </Ellipse>
        </Svg>
        <EvilIcons style={styles.messageIcon} name="comment" size={24} color="black" />
       
      </View>
    </View>
  );
}
const fontfamily="Trebuchet MS";


const styles = StyleSheet.create({
  container: {
      flex:1,
  },
  barStyle:{
    flex:0.25,
    flexDirection:"column",
    backgroundColor: "rgba(0,154,120,1)",
    height:140,
  },
  logoText:{
    fontFamily:fontfamily,
    fontWeight:'bold',
    color:"rgba(255,255,255,1)",
    fontSize:20,
    marginLeft:10,
  },
  barOrta:{
    flex:0.7,
    flexDirection:"row",
    backgroundColor:"rgba(0,154,120,1)",
    justifyContent:"space-between",
    alignItems:"center",
  },
  barAlt:{
    flexDirection:"row",
    flex:0.3,
    backgroundColor:"rgba(0,154,120,1)",
    justifyContent:"space-around",
    marginLeft:1,
    alignItems:"center",

  },
  listData:{
    flex:0.3,
    marginTop:4,
    marginBottom:4,
  },

  listRow:{
    flex:1,
    height:55,
    flexDirection:"row",
    justifyContent:"space-between",
    marginRight:1,
  },
  textStyle:{
    color:"rgba(255,255,255,1)",
    fontSize:12,
    marginLeft:10,
    fontFamily:fontfamily,
    fontWeight:'bold',
  },
  itemBolum:{
    flex:0.7,
    flexDirection:"column",
  },
  topBarIcons:{
    flex:1,
    flexDirection:"row",
    justifyContent:"flex-end",
  },
  sohbetler:{
    justifyContent:"flex-start",
    color:"rgba(255,255,255,1)",
    fontSize:16,
    marginLeft:10,
    marginRight:10,
    
  },
  listitem:{
    flex:1,
    flexDirection:"column",
    alignItems:"flex-start",
    marginLeft:10,
    marginTop:10,
  
  },
  listData:{
    flex:0.7,
    marginTop:4,
    marginBottom:6,
  },
  listTitle:{
    fontFamily: fontfamily,
    color:"#121212",
    fontSize:20,
    
    },
  listDesc:{
    fontFamily:fontfamily,
    color:"rgba(155,155,155,1)",
    marginTop:4,
    marginLeft:1,
  },
  listDate:{
    flex:0.2,
    fontFamily:fontfamily,
    color:"rgba(155,155,155,1)",
    textAlign:"right",
    fontSize:12,
    marginTop:8,
    marginRight:6,
  },

  dotMenuIcon:{
    color:"rgba(255,255,255,1)",
    fontSize:30,
    height:33,
    width:30,
    marginLeft:15,
  },
  searchIcon:{
    color:"rgba(255,255,255,1)",
    fontSize:23,
    height:26,
    width:22,
    marginTop:3,
  },
  icon:{
    flexDirection:"row",
    justifyContent:"flex-end",
    marginRight:10,
  },
  camera: {
    flexDirection:"row",
    justifyContent:"flex-start",
  },
  resim:{
    width:55,
    height:55,
    borderRadius:100,
  },
  sendMessageButton:{
    position:"absolute",
    bottom:60,
    right:30,
    width:70,
    height:70,
    
  },
  messageIcon:{
    top:23,
    position:"absolute",
    color:"rgba(255,255,255,1)",
    fontSize:24,
    left:23,
  },


});
