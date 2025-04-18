import { StyleSheet, Text, View, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import Slider from '@react-native-community/slider';
import { RadialGradient } from 'react-native-gradients';
import Ionicons from '@expo/vector-icons/AntDesign';
import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '@/ThemeContext';


export default function Index() {
  const [playing, setPlaying] = React.useState(true);
  const [count, setCount] = React.useState(0);
  const [buttonColor, setButtonColor] = React.useState('#503156')
  const [buttonColor2, setButtonColor2] = React.useState('#503156')
  const [buttonColor3, setButtonColor3] = React.useState('#503156')
  const context = React.useContext(ThemeContext);

  const timeInSec = context.trackLength;
  const minutes = Math.floor(timeInSec / 60);
  const seconds = timeInSec - minutes * 60;

  const currMin = Math.floor(count / 60);
  const curSec = count - currMin * 60;

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (playing) {
        setCount(c => c + 1);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [playing]);


  const colorList = [
    { offset: '0%', color: buttonColor, opacity: '0.6' },
    { offset: '10%', color: buttonColor, opacity: '0.5' },
    { offset: '36%', color: buttonColor, opacity: '0.3' },
    { offset: '99%', color: buttonColor, opacity: '0.05' },
    { offset: '100%', color: '#FFF800', opacity: '0' }
  ]

  const colorList2 = [
    { offset: '0%', color: buttonColor2, opacity: '0.6' },
    { offset: '10%', color: buttonColor2, opacity: '0.5' },
    { offset: '36%', color: buttonColor2, opacity: '0.3' },
    { offset: '99%', color: buttonColor2, opacity: '0.05' },
    { offset: '100%', color: '#FFF800', opacity: '0' }
  ]

  const colorList3 = [
    { offset: '0%', color: buttonColor3, opacity: '0.6' },
    { offset: '10%', color: buttonColor3, opacity: '0.5' },
    { offset: '36%', color: buttonColor3, opacity: '0.3' },
    { offset: '99%', color: buttonColor3, opacity: '0.05' },
    { offset: '100%', color: '#FFF800', opacity: '0' }
  ]
  

  function str_pad_left(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  }

  const currentTime = str_pad_left(currMin, '0', 2) + ':' + str_pad_left(curSec, '0', 2);
  const finalTime = str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2);

  return (
    <View style={{...styles.container, borderBottomColor: context.tertiaryColor}}>
      <Image source={context.currentAlbum} contentFit='cover' style={{ width: '100%', height: '80%', position: 'absolute' }} />

      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,1)']}
        style={styles.background}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />

      <View style={styles.controlsContainer}>
        <View style={styles.nowPlaying}>
          <Text style={{...styles.titleText, color: context.primaryColor}}>{currentTime}</Text>
          <View style={styles.currentTrack}>
            <Text style={{...styles.trackTitle,  color: context.primaryColor}}>{context.trackName}</Text>
            <Text style={{...styles.artistName, color: context.primaryColor}}>{context.artistName}</Text>
          </View>

          <Text style={{...styles.titleText, color: context.primaryColor}}>{finalTime}</Text>
        </View>

        <Slider
          style={{ width: '100%', height: 40 }}
          step={1}
          minimumValue={0}
          maximumValue={270}
          minimumTrackTintColor={context.primaryColor}
          maximumTrackTintColor={context.secondaryColor}
          thumbTintColor={context.secondaryColor}
          value={count}
          onValueChange={setCount}
        />
        <View style={styles.controls}>

          <View style={styles.center}>
            <RadialGradient x="50%" y="50%" rx="50%" ry="50%" colorList={colorList} />
            <View style={styles.behind}>
              <Pressable onPressIn={() => {
                setCount(current => current - 10);
                setButtonColor('#a477ad');
              }}
                onPressOut={() => {
                  setButtonColor('#503156');
                }}>
                <Ionicons name="banckward" size={32} color={context.primaryColor} />
              </Pressable>
            </View>
          </View>

          <View style={styles.center}>
            <RadialGradient x="50%" y="50%" rx="50%" ry="50%" colorList={colorList2} />
            <View style={styles.behind}>
              <Pressable onPressIn={() => {
                setButtonColor2('#a477ad');
                setPlaying(current => !current);
                
              }}
                onPressOut={() => {
                  setButtonColor2('#503156');
                }}>
                {playing ? <MaterialCommunityIcons name="pause" size={52} color={context.primaryColor} /> : <Ionicons name="caretright" size={46} color={context.primaryColor} />}
              </Pressable>

            </View>
          </View>

          <View style={styles.center}>
            <RadialGradient x="50%" y="50%" rx="50%" ry="50%" colorList={colorList3} />
            <View style={styles.behind}>
              <Pressable onPressIn={() => {
                setCount(current => current + 10);
                setButtonColor3('#a477ad');
              }}
                onPressOut={() => {
                  setButtonColor3('#503156');
                }}
              >
                <Ionicons name="forward" size={32} color={context.primaryColor} />
              </Pressable>
            </View>
          </View>
        </View>
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
