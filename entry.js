import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { supabase } from './supabaseClient';
import { React, useEffect, useState, useContext } from 'react';

import { UserContext, UserProvider } from './client/contexts/userContext';
import { OwnedObjectsProvider } from './client/contexts/profileContext';

export default function Entry(){

    const [ fish, setFish ] = useState([])
    const [ plants, setPlants ] = useState([])

    let getDbFish = async() => await supabase
        .from('FreshwaterFish')
        .select()

    let getDbPlants = async() => await supabase
        .from('Plants')
        .select()


    useEffect(() => {
        getDbFish()
        .then(dbData => {
            // console.log(dbData)
            setFish(dbData.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    useEffect(() => {
        getDbPlants()
        .then(dbData => {
            // console.log(dbData)
            setPlants(dbData.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    if(fish.length > 0 && plants.length > 0){
        let image = fish[7].image
        let plantImage = plants[1].image
      
    
    
    

    return (
        <View style={styles.container}>
            <Text>I am Tankio</Text>
            <View>
                <Image source={{ uri: image}} style={styles.image}/>
                <Image source={{ uri: plantImage}} style={styles.image}/>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 200,
      height: 200,
  },
  })