import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const Menu = ({ data, navigateToScreen }) => {
  return (
    <View style={styles.container}>
      <List.Section>
        {data.map((item, index) => (
          <List.Item
            key={index}
            title={item.title}
            description={item.description}
            left={(props) => <List.Icon {...props} size={30} icon={item.leftIcon} color={item.color}/>}
            onPress={() => navigateToScreen(item.screen)}
          />
        ))}
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});

export default Menu;
