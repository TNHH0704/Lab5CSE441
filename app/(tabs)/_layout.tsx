import { Tabs } from 'expo-router';
import React from 'react';



export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#EF506A',
                tabBarInactiveTintColor: '#B0B0B0',
                tabBarStyle: {
                    backgroundColor: '#F2F2F2',
                    borderTopWidth: 0,
                    height: 60,
                    paddingBottom: 10,
                },
            }}
            initialRouteName="home"
        />
        




    );

}