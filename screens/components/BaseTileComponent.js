import * as React from 'react';
import {View, StyleSheet} from 'react-native';

export default function BaseTileRowButton({children, noPadding}) {
  return (
    <View
      style={[
        styles.tileContainerStyle,
        noPadding ? {} : styles.containerStyle,
      ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    padding: 15,
  },

  tileContainerStyle: {
    backgroundColor: 'white',
    borderRadius: 6,
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowColor: 'black',
    shadowOffset: {height: 2, width: 2},
    marginBottom: 10,
    marginHorizontal: 10,
    elevation: 4,
  },
});
