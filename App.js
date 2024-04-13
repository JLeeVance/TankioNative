import Entry from './client/pages/entry';
import TheLibraryLanding from './client/pages/theLibraryLanding';
import TankTesterLanding from './client/pages/tankTesterLanding';
import SigninSignup from './client/pages/signinSignup';

import AuthenticatedApp from './client/routes/authenticatedApp';
import UnAuthenticatedApp from './client/routes/unAuthenticatedApp';

import { UserProvider } from './client/contexts/userContext';
import { OwnedObjectsProvider } from './client/contexts/profileContext';
import { AuthContext, AuthProvider } from './client/contexts/tokenContext';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { containers } from './client/styleSheet'
import { useContext } from 'react';

import AppEntry from './appEntry';


export default function App() {
  
 

  // const { user, setUser } = useContext(UserContext)
  // const { ownedObjects, setOwnedObjects } = useContext(OwnedObjectsContext)
  
  return(
    <AuthProvider>
      <UserProvider>
        <OwnedObjectsProvider>
          <NavigationContainer>
            <AppEntry />
          </NavigationContainer>
        </OwnedObjectsProvider>
      </UserProvider>
    </AuthProvider>
  )

};



