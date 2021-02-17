import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList, ImageBackground } from 'react-native';

import {MOUNTAINS, BEACHES, BIRDS, FOOD} from './data/dummy-data';

export default function App() {
  const [showMountains, setShowMountains] = useState(false);
  const [showBeaches, setShowBeaches] = useState(false);
  const [showBirds, setShowBirds] = useState(false);
  const [showFood, setShowFood] = useState(false);

  const onShowMountains = () => {
    setShowMountains(true);
    setShowBeaches(false);
    setShowBirds(false);
    setShowFood(false);
  }

  const onShowBeaches = () => {
    setShowMountains(false);
    setShowBeaches(true);
    setShowBirds(false);
    setShowFood(false);
  }

  const onShowBirds = () => {
    setShowMountains(false);
    setShowBeaches(false);
    setShowBirds(true);
    setShowFood(false);
  }

  const onShowFood = () => {
    setShowMountains(false);
    setShowBeaches(false);
    setShowBirds(false);
    setShowFood(true);
  }

  return (
    <View style={styles.container}>
      <View style = {styles.buttonContainer}>
      <Button title = "Mountain"           
              onPress={onShowMountains}
              color="#1E6738"
              />
      <Button title = "Beaches"               
              onPress={onShowBeaches}
              color="#FF5733"
              />
      <Button title = "Birds" 
              onPress={onShowBirds}
              color="#E033FF"
              />
      <Button title = "Food" 
              onPress={onShowFood}
              color="#3368FF"
              />
      </View>
      <StatusBar style="auto" />

      {showMountains && (<View>
        <Text style = {styles.textContainer}>Mountains</Text>
     <FlatList 
      data = {MOUNTAINS}
      keyExtractor = {(item) => item.id}
      renderItem = {({item}) => {
        return (
          <View style = {styles.itemsContainer}>
            <ImageBackground style = {styles.ImageContainer} source = {{uri : item.imageURL}}/>
            
          </View>
        );
      }}
      />
      </View>)}

      {showBeaches && (<View>
        <Text style = {styles.textContainer}>Beaches</Text>
     <FlatList 
      data = {BEACHES}
      keyExtractor = {(item) => item.id}
      renderItem = {({item}) => {
        return (
          <View style = {styles.itemsContainer}>
            <ImageBackground style = {styles.ImageContainer} source = {{uri : item.imageURL}}/>
            
          </View>
        );
      }}
      />
      </View>)}

      {showBirds && (<View>
        <Text style = {styles.textContainer}>Birds</Text>
     <FlatList 
      data = {BIRDS}
      keyExtractor = {(item) => item.id}
      renderItem = {({item}) => {
        return (
          <View style = {styles.itemsContainer}>
            <ImageBackground style = {styles.ImageContainer} source = {{uri : item.imageURL}}/>
            
          </View>
        );
      }}
      />
      </View>)}

      {showFood && (<View>
        <Text style = {styles.textContainer}>Food</Text>
     <FlatList 
      data = {FOOD}
      keyExtractor = {(item) => item.id}
      renderItem = {({item}) => {
        return (
          <View style = {styles.itemsContainer}>
            <ImageBackground style = {styles.ImageContainer} source = {{uri : item.imageURL}}/>
            
          </View>
        );
      }}
      />
      </View>)}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    borderWidth: 5
  },
  ImageContainer: {
    width: 250,
    height: '100%',
    padding: 10
  },
  itemsContainer : {
    height: 250,
    padding: 30
  },
  textContainer: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30
  }
});
