import React from 'react';
import Comp from './Components/Comp'

export default function App() {
  return (
    <Comp />
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
