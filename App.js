import React from 'react';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const pokemonData = [
  {
    title: 'Electric',
    data: [
      { name: 'Pikachu', imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25-2x.png' },
      { name: 'Voltorb', imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_100-2x.png' },
    ],
    bgcolor: '#FFD966', // Softer yellow
    icon: 'flash',
  },
  {
    title: 'Fire',
    data: [
      { name: 'Charmander', imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4-2x.png' },
      { name: 'Growlithe', imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_58-2x.png' },
    ],
    bgcolor: '#FF8C66', // Softer orange
    icon: 'fire',
  },
  {
    title: 'Water',
    data: [
      { name: 'Squirtle', imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_7-2x.png' },
      { name: 'Psyduck', imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_11-2x.png' },
    ],
    bgcolor: '#66B2FF', // Softer blue
    icon: 'water',
  },
];

const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.pokemonName}>{item.name}</Text>
      <Image source={{ uri: item.imageUrl }} style={styles.pokemonImage} />
    </TouchableOpacity>
);

const App = () => (
    <View style={styles.container}>
      <StatusBar Hidden={true}/>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Pokemon</Text>
      </TouchableOpacity>

      <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          sections={pokemonData}
          keyExtractor={(item) => item.name}
          renderItem={renderItem}
          renderSectionHeader={({ section: { title, bgcolor, icon } }) => (
              <View style={[styles.sectionHeader, { backgroundColor: bgcolor }]}>
                <Icon name={icon} size={24} color="#fff" style={styles.sectionIcon} />
                <Text style={styles.sectionTitle}>{title}</Text>
              </View>
          )}
      />
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  addButton: {
    backgroundColor: 'skyblue',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#E6E6FA',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  sectionIcon: {
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E6E6FA',
    borderColor: 'black',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6FA',
  },
  pokemonName: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  pokemonImage: {
    width: 100,
    height: 140,
  },
});

export default App;
