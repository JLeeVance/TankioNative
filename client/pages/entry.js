import { React } from 'react';
import { Text, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { containers, buttons } from '../styleSheet';

export default function Entry({ navigation }){

    const handleNavigate = (destination) => {
        let routes = {
            "Home":"Landing Page",
            "Library":"The Library",
            "TankTester":"TankTester"
        }
        navigation.navigate(routes[destination])
    }
      
    return (
        <View style={containers.appContainer}>
            <Text>
                I am Tankio Landing Page
            </Text>
            <Pressable
                title='Library'
                style={buttons.smallButton}
                onPressOut={(e) => handleNavigate(e._targetInst.memoizedProps.title)}
                >
                <Text>
                    Library
                </Text>
            </Pressable>
            <Pressable
                title='TankTester'
                style={buttons.smallButton}
                onPressOut={(e) => handleNavigate(e._targetInst.memoizedProps.title)}
                >
                <Text>
                    TankTester
                </Text>
            </Pressable>
            <StatusBar style="auto" />
        </View>
    )
}
