import { Stack } from "expo-router";
import { ThemeContext, ThemeProvider } from '@/ThemeContext';
export default function RootLayout() {
  return (
    <ThemeProvider>
 <Stack screenOptions={{statusBarBackgroundColor: 'transparent', statusBarTranslucent: true}}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }}  />
    </Stack>
    </ThemeProvider>
   
  );
}
