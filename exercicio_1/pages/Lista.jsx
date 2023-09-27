import React from "react";
import { View, Text, FlatList, Button } from "react-native";
import data from "../data/data.json";
import { useNavigation } from '@react-navigation/native';

export default function Lista() {
    const navigation = useNavigation()
    return (
        <View>
            <Text>Lero</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => <Button onPress={() => navigation.navigate('TabDetalhes', { dado: item })} title={item.nome} >{item.nome}</Button>}
                keyExtractor={item => item.id.toString()} // Converta o ID para string
            />
        </View>
    );
}