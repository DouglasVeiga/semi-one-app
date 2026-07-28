import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {router} from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle= {s.container}>
      <Image source={require('../../assets/images/senai.jpg')} style={s.image} resizeMode='cover' />
      <View style={s.content}>
        <Text style={s.title}> Senai Curitiba </Text>

        <Text style={s.paragraph}> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam alias illum, delectus, corporis, 
          harum sed distinctio dignissimos soluta impedit sunt est earum iure. Soluta voluptate eius cumque atque nemo.
        </Text>

        <TouchableOpacity style={s.button} onPress={()=> router.push('/explore')}>
          <Text style={s.buttonText}>Lista de Cursos </Text>
        </TouchableOpacity>

      </View>
</ScrollView>
  );
}

const s = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffff'
  },
  image:{
    width: '100%',
    height: 220
  },
  content:{
    padding: 20
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 12
  },
  paragraph:{
    fontSize: 16,
    lineHeight: 22,
    color: '#1a1a1a1a',
    marginBottom: 30
  },
  button:{
    backgroundColor: '#004a94',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf:'flex-end'
  },
  buttonText:{
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  }
});
