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
    basicContainer: {
        marginTop: 40,
        padding: 12,
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

const spacing = StyleSheet.create({
    verticallySpaced: {
        paddingTop: 4,
        paddingBottom: 4,
        alignSelf: 'stretch',
      },
})

const margins = StyleSheet.create({
    mt10: {
        marginTop: 10,
    },
    mt20: {
        marginTop: 20,
    },
})

export { images, containers, buttons, margins, spacing }
