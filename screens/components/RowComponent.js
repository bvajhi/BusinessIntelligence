import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function RowComponent(props) {
  const {left, right} = props;

  return (
    <View style={styles.container}>
      <Text>{left}</Text>
      <Text>{right}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
