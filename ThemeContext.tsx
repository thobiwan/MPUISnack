import { createContext, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, SetStateAction, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
  const [primaryColor, setPrimaryColor] = useState('#503156');
  const [secondaryColor, setSecondaryColor] = useState('#8B6790');
  const [tertiaryColor, setTertiaryColor] = useState('#301f35');
  const [currentAlbum, setCurrentAlbum] = useState(require('./assets/images/sffs.jpg'));
  const [trackLength, setTrackLength] = useState(270);
  const [trackName, setTrackName] = useState('15 Missed Calls');
  const [artistName, setArtistName] = useState('Suffocate For Fuck Sake');
  const [buttonColor, setButtonColor] = useState('#503156');

  function highlightButton(state, color){
    if(state){
      setButtonColor(color);
    }else{
      setButtonColor(primaryColor);
    }

  }

  function toggleTheme(color: string, album: any, secondaryColor: SetStateAction<string>, tertiaryColor: SetStateAction<string>, trackLength: SetStateAction<number>, trackName: SetStateAction<string>, artistName: SetStateAction<string>) {
    setSecondaryColor(secondaryColor)
    setTertiaryColor(tertiaryColor)
    setPrimaryColor(color)
    setButtonColor(color);
    setCurrentAlbum(album)
    setTrackLength(trackLength)
    setTrackName(trackName)
    setArtistName(artistName)
}

  const value = {
    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
    tertiaryColor: tertiaryColor,
    currentAlbum: currentAlbum,
    trackLength: trackLength,
    trackName: trackName,
    artistName: artistName,
    toggleTheme: toggleTheme,
    highlightButton: highlightButton,
    buttonColor: buttonColor
  }

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };