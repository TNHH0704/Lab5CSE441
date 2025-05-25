import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack
    screenOptions={{
      headerShown: false,
      animation: 'fade_from_bottom',
      contentStyle: { backgroundColor: '#F2F2F2' },
    }}
    
    initialRouteName="index" 
  />;
}
