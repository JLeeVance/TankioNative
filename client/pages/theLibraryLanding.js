import { ScrollView, Text, Image, Pressable } from "react-native"
import { useEffect, useState } from "react"
import { supabase } from "../../supabaseClient"
import { images, buttons, containers } from  "../styleSheet.js"

export default function TheLibraryLanding({ navigation }){

    const handleNavigate = (destination) => {
        let routes = {
            "Home":"Landing Page",
            "Library":"The Library",
            "TankTester":"TankTester"
        }
        navigation.navigate(routes[destination])
    }

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

    let testImgList = plants.map(plant => <Image source={{ uri: plant.image}} key={plant.scientific_name} style={images.smallImg} />)


    if(fish.length > 0 && plants.length > 0){

        return(
            <ScrollView style={containers.libraryContainer}>
                <Text>
                    This is the The Library Landing
                </Text>
                {testImgList}
                <Pressable
                title='Home'
                style={buttons.smallButton}
                onPressOut={(e) => handleNavigate(e._targetInst.memoizedProps.title)}
                >
                    <Text>
                        Home
                    </Text>
                </Pressable>
            </ScrollView>
        )
    }
}
