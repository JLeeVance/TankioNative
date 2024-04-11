import SigninSignup from "../pages/signinSignup"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function UnAuthenticatedApp(){

    const Stack = createNativeStackNavigator();

    return(
        <>
            <Stack.Navigator
                initialRouteName='Signin Signup'
                >
                <Stack.Screen
                    name='Signin Signup'
                    component={SigninSignup}
                    />
            </Stack.Navigator>
        </>
    )
}