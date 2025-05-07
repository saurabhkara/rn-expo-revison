import { Text, View, StyleSheet,Image } from "react-native";
import notes from '@/assets/images/note.png'

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image source={notes} style={styles.image} />
      <Text>Welcome to Note App</Text>
      <Text></Text>
    </View>
  );
}
const styles= StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image:{
    height:100,
    width:100,
    tintColor:'orange',

  }
})