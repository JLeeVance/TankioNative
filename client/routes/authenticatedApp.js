import { useContext } from "react"
import { AuthContext } from "../contexts/tokenContext"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Entry from "../../entry"
import TheLibraryLanding from "../pages/theLibraryLanding"
import TankTesterLanding from "../pages/tankTesterLanding"
import { View, Text, Pressable } from "react-native"
import { containers } from "../styleSheet"

export default function AuthenticatedApp(){

    const Stack = createNativeStackNavigator();

    const { token, updateToken } = useContext(AuthContext)

    const handleRemoveToken = () => {
        updateToken()
    }


    return (
            <>  
                <View style={containers.basicContainer}>
                    <Pressable onPress={handleRemoveToken}>
                        <Text>
                            Logout
                        </Text>
                    </Pressable>
                </View>
                <Stack.Navigator
                    initialRouteName='Landing Page'
                    >
                    <Stack.Screen
                        name='Landing Page'
                        component={Entry}           
                        />
                    <Stack.Screen
                        name='The Library'
                        component={TheLibraryLanding}
                        />
                    <Stack.Screen
                        name='TankTester'
                        component={TankTesterLanding}
                        />
                </Stack.Navigator>
            </>
                  

    )
    
}