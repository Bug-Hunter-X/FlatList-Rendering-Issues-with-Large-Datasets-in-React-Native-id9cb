```javascript
import React from 'react';
import { FlatList, StyleSheet, Text, View, SectionList } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => ({ key: i.toString(), value: `Item ${i}` }));

const ItemSeparator = () => {
  return (
    <View style={styles.separator} />
  );
};

const FixedFlatList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.value}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  },
});

export default FixedFlatList;
```