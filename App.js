
import Entry from './entry';
import { UserProvider } from './client/contexts/userContext';
import { OwnedObjectsProvider } from './client/contexts/profileContext';



export default function App() {



  // const { user, setUser } = useContext(UserContext)
  // const { ownedObjects, setOwnedObjects } = useContext(OwnedObjectsContext)

  
  return (

      <UserProvider>
        <OwnedObjectsProvider>
          <Entry />
        </OwnedObjectsProvider>
      </UserProvider>

  )
};



