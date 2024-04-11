import { StyleSheet } from "react-native";

const images = StyleSheet.create({
    smallImg: {
        width: 200,
        height: 200,
    },
})

const containers = StyleSheet.create({
    appContainer: {
        display:'flex',
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    libraryContainer: {
        display:'flex',
        flex:1,
        flexDirection:'column',
        backgroundColor: '#fff',
    },
})

const buttons = StyleSheet.create({
    smallButton: {
        width:'50%',
        padding:10,
        backgroundColor: 'pink',
        borderWidth: 1,
        borderRadius:20
    },
})

export { images, containers, buttons }
