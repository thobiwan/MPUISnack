import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native';
import { ThemeContext } from '@/ThemeContext';
import { useContext } from 'react';
import { RadialGradient } from 'react-native-gradients';
import Ionicons from '@expo/vector-icons/AntDesign';


export default function AboutScreen() {
  const context = useContext(ThemeContext);

  const colorList = [
    { offset: '0%', color: context.buttonColor, opacity: '0.6' },
    { offset: '10%', color: context.buttonColor, opacity: '0.5' },
    { offset: '36%', color: context.buttonColor, opacity: '0.3' },
    { offset: '99%', color: context.buttonColor, opacity: '0.05' },
    { offset: '100%', color: '#FFF800', opacity: '0' }
  ]

  return (
    <View style={styles.center}>
    <RadialGradient x="50%" y="50%" rx="50%" ry="50%" colorList={colorList} />
    <View style={styles.behind}>
      <Pressable onPressIn={() => {
       context.highlightButton(true, '#a477ad')
       // setCount(current => current - 10);
        //setButtonColor('#a477ad');
      }}
        onPressOut={() => {
         context.highlightButton(false, '')
          //setButtonColor('#503156');
        }}>
        <Ionicons name="banckward" size={32} color={context.primaryColor} />
      </Pressable>
    </View>
  </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    borderBottomColor: '#f00',
    borderBottomWidth:1
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '80%',
  },
  controls: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'space-between',
    padding: 10,
  },
  nowPlaying: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 10,

  },
  image: {
    flex: 1,
    height: '100%',
    backgroundColor: '#324376'
  },
  button: {
    alignItems: 'center',
    borderRadius: 50,
    width: 100,
    height: 100,

  },
  center: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  behind: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
  },
  titleText: {
    fontWeight: 'bold',
    marginHorizontal: 5
  },
  trackTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10
  },
  artistName: {
    fontWeight: 'bold',
    marginHorizontal: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0.5, height: 1 },
    textShadowRadius: 10
  },
  currentTrack: {
    alignItems: 'center',
    fontWeight: 'bold',
    marginHorizontal: 5
  },
  controlsContainer: {
    position: 'absolute',
    width: '100%',
    bottom: '5%',
  },
});