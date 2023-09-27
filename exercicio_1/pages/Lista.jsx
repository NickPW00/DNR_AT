import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import data from "../data/data.json";
import { useNavigation } from '@react-navigation/native';

export default function Lista() {
    const navigation = useNavigation()
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => <Pressable onPress={() => navigation.navigate('TabDetalhes', { dado: item })} title={item.nome} ><Text>{item.nome}</Text></Pressable>}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}