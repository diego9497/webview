import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, PermissionsAndroid } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  useEffect(() => {
    async function askPermissions() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: "Cool Photo App Micrhophone Permission",
            message:
              "Cool Photo App needs access to your microphone ",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the microphone");
        } else {
          console.log("Microphone permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
    }
    askPermissions();

  }, [])

  const uri =
    'https://110769aee822.ngrok.io/';
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safe}>
        <WebView style={styles.web} source={{ uri: uri }} />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
  web: {
    flex: 1,
    backgroundColor: 'red',
  },
  safe: {
    flex: 1,
  },
});

export default App;
