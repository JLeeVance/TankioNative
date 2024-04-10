import { createContext , useState  } from "react";

const OwnedObjectsContext = createContext({
    ownedObjects: [],
    setOwnedObjects: () => {}
})

function OwnedObjectsProvider({ children }){
    const [ ownedObjects, setOwnedObjects ] = useState([])

    return (
        <OwnedObjectsContext.Provider value={{ownedObjects, setOwnedObjects}}>
            {children}
        </OwnedObjectsContext.Provider>
    )
}

export { OwnedObjectsContext, OwnedObjectsProvider}