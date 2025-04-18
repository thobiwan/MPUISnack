import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { ThemeContext } from '@/ThemeContext';
import React from 'react';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: "'Allelujah! Don't Bend! Ascend!",
    artist: 'Godspeed You! Black Emperor',
    src: require('../../assets/images/gybe.jpg'),
    psrc: '../../assets/images/gybe.jpg',
    color: '#aaa',
    secondaryColor:'#ddd',
    tertiaryColor: '#333',
    trackLength: 390,
    trackName: 'Their Helicopters Sing'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: "You'd Prefer an Astronaut",
    artist: 'Hum',
    src: require('../../assets/images/hum.jpg'),
    psrc: './assets/images/hum.jpg',
    color: '#00A58B',
    secondaryColor:'#00c4a3',
    tertiaryColor: '#00332a',
    trackLength: 309,
    trackName: 'Stars'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Sunbather',
    artist: 'Deafheaven',
    src: require('../../assets/images/deafheaven.png'),
    psrc: './assets/images/gybe.jpg',
    color: '#EB8190',
    secondaryColor:'#f4a1ac',
    tertiaryColor:'#4c252a',
    trackLength: 554,
    trackName: 'Dream House'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Fyra',
    artist: 'Suffocate For Fuck Sake',
    src: require('../../assets/images/sffs.jpg'),
    psrc: './assets/images/gybe.jpg',
    color: '#503156',
    secondaryColor:'#8B6790',
    tertiaryColor: '#301f35',
    trackLength: 270,
    trackName: '15 Missed Calls'
  },
];

type ItemProps = {title: string, artist:string};


export default function AboutScreen() {
  const Item = ({title, artist}: ItemProps) => (
    <View style={styles.item}>
      <Text style={{...styles.title, color: context.primaryColor}}>{title}</Text>
      <Text style={{...styles.artist, color: context.primaryColor}}>{artist}</Text>
    </View>
  );

  const context = React.useContext(ThemeContext);
  return (
    <View style={{...styles.container, borderBottomColor: context.tertiaryColor}}>

<FlatList style={styles.list}
        data={DATA}
        renderItem={ ({item}) => (
          <Pressable style={styles.button} onPress={() => context.toggleTheme(item.color, item.src, item.secondaryColor, item.tertiaryColor, item.trackLength, item.trackName, item.artist)}>
            <View style={{...styles.albumContainer, borderBottomColor: context.tertiaryColor}} >
           <Image source={item.src} contentFit='contain' style={{
            width:80,
            height:80,
          }}></Image>
          <Item title={item.title} artist={item.artist} />
          </View>
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth:1
  },
  list: {
    marginTop: 50,
    width: '100%'
  },
  albumContainer: {
    flexDirection:'row',
    alignItems:'center',
    borderBottomColor: '#503156', 
    borderWidth: 1,
    width: '100%',
    height:80,
  },
  button: {
    padding: 0,
    margin: 0,
    alignItems:'center',
    backgroundColor: '#000',
    width: '100%',
    height: 80,
    borderWidth: 0,
  },
  item: {
    justifyContent: 'center',
    color: '#fff',
    paddingHorizontal: 10,
    height: 100,
    width: '100%'
  },
  title: {
    fontSize: 18,
  },
  artist: {
    fontSize: 14,
  },
});