import { StyleSheet, Text, View, ScrollView, Image, ImageSourcePropType } from "react-native";

type Lista = {
  id: string;
  nome: string;
  curso: string;
  imagem: ImageSourcePropType | undefined;
}

const listas: Lista[] = [
  {
    id: '1',
    nome: 'Dr. Álvara Mendes',
    curso: 'Fundamentos da Física Quântica.',
    imagem: require('../../assets/images/prof01.webp')
  },
  {
    id: '2',
    nome: 'Dr. Jacinto Tronco',
    curso: 'Design de Interface e Experiência do Usuário (UX/UI).',
    imagem: require('../../assets/images/prof02.webp')
  },
  {
    id: '3',
    nome: 'Luiz Inácio Lula da Silva',
    curso: 'Aprendizado de Máquina e Redes Neurai',
    imagem: require('../../assets/images/prof03.webp')
  },
  {
    id: '4',
    nome: 'Mr M',
    curso: 'Análise da Obra de Clarice Lispector.',
    imagem: require('../../assets/images/prof04.webp')
  },
  {
    id: '5',
    nome: 'Professor Bráulio',
    curso: 'Engenharia de Sistemas Embarcados.',
    imagem: require('../../assets/images/prof05.webp')
  },
];

export default function TabThreeScreen() {
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content} showsHorizontalScrollIndicator={false} >
      <Text style={s.header} >Cursos Técnicos Senai</Text>

      {listas.map((item) => (
        <View key={item.id} style={s.card}>
          <Image source={item.imagem} style={s.cardImage} resizeMode='cover' />
          <View style={s.cardBody}>
            <Text style={s.cardTitle}>{item.nome}</Text>
            <Text style={s.cardDesc}>{item.curso}</Text>
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
    flexDirection: 'row',
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
    borderRadius: 100,
    width: '20%',
    height: 80
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
    width: 200,
    flexGrow: 2,
    lineHeight:20
  }
});
