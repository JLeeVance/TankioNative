import { View, Text, Image } from "react-native"
import { containers, images } from '../styleSheet'

export default function LibraryCard({ navigation, image, common_name, scientific_name  }){

    return(
        <View style={containers.card}>
            <Image source={{ uri : image}} style={images.smallImg} />
            <View style={containers.cardContent}>
                <Text style={containers.title}>{common_name}</Text>
                <Text>{scientific_name}</Text>
            </View>
        </View>
    )
}