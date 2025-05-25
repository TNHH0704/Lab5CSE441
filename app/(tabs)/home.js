import { FlatList, StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useEffect } from 'react'
import { Link } from 'expo-router';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


const home = () => {

    const [data, setData] = React.useState([]);
    const filePath = 'https://kami-backend-5rs0.onrender.com/services';

    useEffect(() => {
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setData(data.products);
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    });

    



    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, padding: 10 }}>
                <Text style={{ fontSize: 36, fontWeight: 'bold', marginBottom: 10 }}>Product List</Text>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: 'row', marginBottom: 10, padding: 10, backgroundColor: '#fff', borderRadius: 5 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
                                <Text style={{ color: 'gray' }}>Price: ${item.price}</Text>
                            </View>
                        </View>
                    )}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )

}

export default home

const styles = StyleSheet.create({

})