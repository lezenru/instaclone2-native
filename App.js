import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from "react";
import AppLoading from "expo-app-loading/build/AppLoadingNativeWrapper";
import { Ionicons } from "@expo/vector-icons";
import * as Font from 'expo-font';
import {Asset} from "expo-asset";

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false)
  const preload = () => {
    const fontsToLoad = [Ionicons.font]
    const fontPromises
        = fontsToLoad.map((font) => Font.loadAsync(font));
    const imagesToLoad = [require("./assets/Instagram_logo.png")];
    const imagePromises = imagesToLoad.map((image) => Asset.loadAsync(image))
    return Promise.all(fontsToLoad, imagePromises);
  };
  if(loading){
    return (<AppLoading
        startAsync={preload()}
        onError={console.warn()}
        onFinish={onFinish()}/>);
  };

  return (
    <View style={styles.container}>
      <Text>AppLoading ~</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
