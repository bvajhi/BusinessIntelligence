import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function RowComponent(props) {
  const {label, value} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label + ': '}</Text>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  label: {
    fontWeight: 'bold',
  },
});
