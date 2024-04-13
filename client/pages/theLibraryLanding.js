import { ScrollView, Text, Image, Pressable } from "react-native"
import { useEffect, useState } from "react"
import { supabase } from "../../supabaseClient"
import { images, buttons, containers } from  "../styleSheet.js"

import LibraryCard from "../components/libraryCard.js"

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
    const [ objsToRender, setObjsToRender ] = useState([])

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

    useEffect(() => {
        setObjsToRender([...fish, ...plants])
    }, [fish, plants])

    if(objsToRender.length > 0){

        const testImgList = objsToRender.map(obj => {
            if(obj.fish === false){
              return <Image source={{ uri: obj.image }} key={obj.common_name} style={images.smallImg} />;
            }
        })

        const cardsToRender = objsToRender.map(obj => {
            return <LibraryCard image={obj.image} key={obj.common_name} common_name={obj.common_name} scientific_name={obj.scientific_name} style={images.smallImg} />;
        })

        return(
            <ScrollView style={containers.libraryContainer}>
                <Text>
                    This is the The Library Landing
                </Text>
                {cardsToRender}
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
