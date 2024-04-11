import { AuthContext } from './client/contexts/tokenContext';
import { useContext } from 'react';

import AuthenticatedApp from './client/routes/authenticatedApp';
import UnAuthenticatedApp from './client/routes/unAuthenticatedApp';

export default function AppEntry() {
  
  const { token } = useContext(AuthContext)
  
  if(token){
    return(
        <AuthenticatedApp />
    )
  } else {
    return(
        <UnAuthenticatedApp />
    )
  }
};
