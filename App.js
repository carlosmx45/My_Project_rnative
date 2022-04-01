import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>I'm holding my breath, holding so tight
Nothing is wrong, nothing is right
I'm in the dark, looking for light
Won't someone please save my life?
Inside I'm a mess, but I don't let it show
I'm just hanging on, but you'll never know
I smile all day, and cry through the night
Won't someone please save my life?
It's fleeting
Dull knives
Taking my life
A slow burn fire
From the inside
Dull knives
Twisting my spine
They're taking their time, time
'Til I lose my mind
A smoldering flame, deep in my heart
Barely a sign, it's barely a spark
Holding on through, every night
Won't someone please save my life?
I'm crying for help, it's such a cliche
Invisible pain, it's filling each day
I open my mouth and feed you a lie
Won't someone please save my life?
It's fleeting
No repeating
Dull knives
Taking my life
A slow burn fire
From the inside
Dull knives
Twisting my spine
They're taking their time, time
'Til I lose my mind
Dull knives
Ripping from the inside
Spare me the ride
From the inside
Dull knives
Twisting my spine
They're taking their time, time
'Til I lose my mind
Dull knives</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'Green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
