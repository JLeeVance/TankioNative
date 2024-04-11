import Entry from './entry';
import TheLibraryLanding from './client/pages/theLibraryLanding';
import TankTesterLanding from './client/pages/tankTesterLanding';

import { UserProvider } from './client/contexts/userContext';
import { OwnedObjectsProvider } from './client/contexts/profileContext';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';

import { containers } from './client/styleSheet'

const Stack = createNativeStackNavigator();


export default function App() {



  // const { user, setUser } = useContext(UserContext)
  // const { ownedObjects, setOwnedObjects } = useContext(OwnedObjectsContext)

  
  return (
      <UserProvider>
        <OwnedObjectsProvider>
         
            <NavigationContainer>
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
            </NavigationContainer>
    
        </OwnedObjectsProvider>
      </UserProvider>
   
    

  )
};



