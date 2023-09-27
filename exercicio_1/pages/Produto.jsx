import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    stretch: {
        width: 300,
        height: 200,
    },
});

export default function Produto({ route }) {
    const dados = route.params;
    const item = dados.dado

    return (
        <View>
            <Image
                styles={styles.stretch}
                source={{ uri: 'https://i.imgur.com/Rg8DNtT.jpeg' }}
            />
            <Text>{item.nome}</Text>
            <Text>{item.descricao}</Text>
        </View>
    );
}