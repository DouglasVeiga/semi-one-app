import { StyleSheet, Text, View, ScrollView, Image, ImageSourcePropType } from "react-native";

type Curso = {
  id: string;
  titulo: string;
  descricao: string;
  imagem: ImageSourcePropType | undefined;
}

const cursos: Curso[] = [
  {
    id: '1',
    titulo: 'Automação Idustrial',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, placeat voluptatem optio ipsam minima impedit! Numquam, ipsam. Quae nisi ea suscipit libero laudantium ratione facilis architecto corrupti, repellat harum voluptate.',
    imagem: require('../../assets/images/01.jpg')
  },
  {
    id: '2',
    titulo: 'Eletroeletrônica',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, placeat voluptatem optio ipsam minima impedit! Numquam, ipsam. Quae nisi ea suscipit libero laudantium ratione facilis architecto corrupti, repellat harum voluptate.',
    imagem: require('../../assets/images/02.jpg')
  },
  {
    id: '3',
    titulo: 'Desenvolvimento de sistemas',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, placeat voluptatem optio ipsam minima impedit! Numquam, ipsam. Quae nisi ea suscipit libero laudantium ratione facilis architecto corrupti, repellat harum voluptate.',
    imagem: require('../../assets/images/03.jpg')
  },
  {
    id: '4',
    titulo: 'Mecatrônica Idustrial',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, placeat voluptatem optio ipsam minima impedit! Numquam, ipsam. Quae nisi ea suscipit libero laudantium ratione facilis architecto corrupti, repellat harum voluptate.',
    imagem: require('../../assets/images/04.jpg')
  },
  {
    id: '5',
    titulo: 'Logística',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, placeat voluptatem optio ipsam minima impedit! Numquam, ipsam. Quae nisi ea suscipit libero laudantium ratione facilis architecto corrupti, repellat harum voluptate.',
    imagem: require('../../assets/images/05.jpg')
  },
];

export default function TabTwoScreen() {
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content} showsHorizontalScrollIndicator={false} >
      <Text style={s.header} >Cursos Técnicos Senai</Text>

      {cursos.map((item) => (
        <View key={item.id} style={s.card}>
          <Image source={item.imagem} style={s.cardImage} resizeMode='cover' />
          <View style={s.cardBody}>
            <Text style={s.cardTitle}>{item.titulo}</Text>
            <Text style={s.cardDesc}>{item.descricao}</Text>
          </View>
        </View>
      )
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  content: {
    padding: 16,
    paddingBottom: 30
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  card: {
    borderRadius: 12,
    backgroundColor: '#ffffff',
    marginBottom: 30,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  cardImage: {
    width: '100%',
    height: 250
  },
  cardBody: {
    padding: 15
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 500,
    color: '#004a94',
    marginBottom: 6
  },
  cardDesc: {
    fontSize: 14,
    color: '#444',
    lineHeight:20
  }
});
