import { StyleSheet } from "react-native";

const images = StyleSheet.create({
    smallImg: {
        width: 200,
        height: 200,
    },
    cardImage: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
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
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
      },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
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
        paddingBottom: 4
      },
})

const margins = StyleSheet.create({
    mt10: {
        marginTop: 10,
    },
    mt20: {
        marginTop: 20,
    },
    mt25: {
        marginTop: 25,
    },
    mt30: {
        marginTop: 30
    },
})

export { images, containers, buttons, margins, spacing }
