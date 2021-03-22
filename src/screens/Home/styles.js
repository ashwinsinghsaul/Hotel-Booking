import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: Dimensions.get('screen').height,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    title: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#000',
        width: '70%',
        marginLeft: 15,
    },
    button: {
        backgroundColor: '#fff',
        width: 200,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        marginLeft: 15,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',

    },
    searchButton: {
        backgroundColor: '#fff',
        height: 60,
        width: Dimensions.get('screen').width - 20,
        borderRadius: 30,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: 50,
        zIndex: 100,
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold',

    }
});

export default styles;