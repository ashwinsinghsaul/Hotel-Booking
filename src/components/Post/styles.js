import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        margin: 20,
        marginTop: 50,
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    title: {
        marginVertical: 10,
        color: '#5b5b5b',
        fontWeight: 'bold',
        fontSize: 20,
    },
    description: {
        fontSize: 10,
        lineHeight: 16,
    },
    prices: {
        fontSize: 18,
        marginVertical: 10,
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },
    price: {
        fontWeight: 'bold',
    },
    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline',
    },
})

export default styles;