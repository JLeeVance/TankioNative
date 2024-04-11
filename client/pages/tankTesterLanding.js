import { StyleSheet, Text, View, Pressable } from "react-native";
import { buttons, containers } from "../styleSheet";

export default function TankTesterLanding({ navigation }){

    const handleNavigate = (destination) => {
        let routes = {
            "Home":"Landing Page",
            "Library":"The Library",
            "TankTester":"TankTester"
        }
        navigation.navigate(routes[destination])
    }

    return (
        <View style={styles.container}>
            <Text>
                I am the TankTester Landing Page
            </Text>
            <Pressable
                title='Home'
                style={styles.button}
                onPressOut={(e) => handleNavigate(e._targetInst.memoizedProps.title)}
                >
                <Text>
                    Home
                </Text>
            </Pressable>
        </View>
    )
}

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
    button: {
        padding:10,
        backgroundColor: 'pink',
        borderWidth: 1,
        borderRadius:20
    }
  })