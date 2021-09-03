import React from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import Foundation from "react-native-vector-icons/Foundation"
import { vh, vw } from "../constants"


const Settings = () => {

    let firstBlock = [
        {
            name: 'Finger Print',
            icon: 'lock',
            iconType: "MaterialCommunityIcons",
            navigation:""
        },
        {
            name: 'Push Notification',
            icon: 'notifications-sharp',
            iconType: "Ionicons",
            navigation:""

        },
        {
            name: 'Dark Mode',
            icon: 'moon-first-quarter',
            iconType: "MaterialCommunityIcons",
            navigation:""

        },
        {
            name: 'Language',
            icon: 'md-globe-outline',
            iconType: "Ionicons",
            navigation:""

        },

    ]

    let secondBlock = [
        {
            name: 'Currency',
            icon: 'dollar',
            iconType: "Foundation",
            navigation:""

        },
        {
            name: 'Transactions',
            icon: 'dollar',
            iconType: "Foundation",
            navigation:""

        },
        {
            name: 'Wallet Connect',
            icon: 'moon-first-quarter',
            iconType: "MaterialCommunityIcons",
            navigation:""

        },
        {
            name: 'FAQ',
            icon: 'md-globe-outline',
            iconType: "Ionicons",
            navigation:""

        },

    ]
    let thiredBlock = [
        {
            name: 'Twitter',
            icon: 'lock',
            iconType: "MaterialCommunityIcons",
            navigation:""

        },
        {
            name: 'Telegram',
            icon: 'notifications-sharp',
            iconType: "Ionicons",
            navigation:""

        },
        {
            name: 'Reddit',
            icon: 'moon-first-quarter',
            iconType: "MaterialCommunityIcons",
            navigation:""

        },
        {
            name: 'About',
            icon: 'globe',
            iconType: "Entypo",
            navigation:""

        },

    ]

  
    return (
        <View style={{ backgroundColor: "#eeeeee", flex: 1 }}>
            <View style={{ backgroundColor: 'orange', alignItems: 'center', flex: 0.12, justifyContent: 'center' }}><Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', alignItems: 'center', alignSelf: 'center' }}>Settings</Text></View>
            <ScrollView style={{ flex: 0.8 }}>
                <View style={{ flexDirection: 'row', paddingHorizontal: 5, backgroundColor: '#fff', borderTopWidth: 1, borderBottomWidth: 1, paddingVertical: 10, borderBottomColor: 'grey', borderTopColor: 'grey', marginTop: vh * 0.04, marginBottom: vh * 0.04 }}>
                    <MaterialCommunityIcons
                        name="folder-multiple-outline"
                        size={32}
                        color={'#9e9e9e'}
                        style={{ marginRight: vw * 0.02, marginTop: vw * 0.01, width: '10%' }}
                    />
                    <View style={{ marginTop: vw * 0.01, width: '80%' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Main wallet</Text>
                        <Text style={{ fontSize: 11 }}>Multi-coin wallet</Text>
                    </View>
                    <TouchableOpacity>

                        <Entypo
                            name="chevron-right"
                            size={26}
                            color={'#9e9e9e'}
                            style={{ justifyContent: 'flex-end', marginTop: vw * 0.01 }}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    {firstBlock.map(val => {
                        return (
                            <View style={{ flexDirection: 'row', paddingHorizontal: 5, backgroundColor: '#fff', borderTopWidth: 1, borderBottomWidth: 1, paddingVertical: 10, borderBottomColor: 'grey', borderTopColor: 'grey' }}>
                                {val.iconType == 'MaterialCommunityIcons' ?
                                    <MaterialCommunityIcons
                                        name={val.icon}
                                        size={28}
                                        color={'#9e9e9e'}
                                        style={{ marginRight: vw * 0.02, marginTop: -2, width: '10%' }}
                                    />
                                    :
                                    val.iconType == 'Ionicons' ?
                                        <Ionicons
                                            name={val.icon}
                                            size={28}
                                            color={'#9e9e9e'}
                                            style={{ marginRight: vw * 0.02, marginTop: -2, width: '10%' }}
                                        /> : val.iconType == 'Foundation' ?
                                            <Foundation
                                                name={val.icon}
                                                size={28}
                                                color={'#9e9e9e'}
                                                style={{ marginRight: vw * 0.02, marginTop: -2, width: '10%' }}
                                            />
                                            : val.iconType == 'Entypo' ?
                                                <Entypo
                                                    name={val.icon}
                                                    size={28}
                                                    color={'#9e9e9e'}
                                                    style={{ marginRight: vw * 0.02, marginTop: -2, width: '10%' }}
                                                /> : null

                                }
                                <View style={{ marginTop: vw * 0.01, width: '80%' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{val.name}</Text>
                                </View>
                                <TouchableOpacity>
                                    <Entypo
                                        name="chevron-right"
                                        size={26}
                                        color={'#9e9e9e'}
                                        style={{ justifyContent: 'flex-end', marginTop: vw * 0.01 }}
                                    />
                                </TouchableOpacity>

                            </View>
                        )
                    })}
                </View>
                <View style={{ marginTop: vh * 0.02 }}>
                    {secondBlock.map(val => {
                        return (
                            <View style={{ flexDirection: 'row', paddingHorizontal: 5, backgroundColor: '#fff', borderTopWidth: 1, borderBottomWidth: 1, paddingVertical: 10, borderBottomColor: 'grey', borderTopColor: 'grey' }}>
                                {val.iconType == 'MaterialCommunityIcons' ?
                                    <MaterialCommunityIcons
                                        name={val.icon}
                                        size={28}
                                        color={'#9e9e9e'}
                                        style={{ marginRight: vw * 0.02, marginTop: -2, width: '10%' }}
                                    />
                                    :
                                    val.iconType == 'Ionicons' ?
                                        <Ionicons
                                            name={val.icon}
                                            size={28}
                                            color={'#9e9e9e'}
                                            style={{ marginRight: vw * 0.02, marginTop: -2, width: '10%' }}
                                        /> : val.iconType == 'Foundation' ?
                                            <Foundation
                                                name={val.icon}
                                                size={28}
                                                color={'#9e9e9e'}
                                                style={{ marginRight: vw * 0.02, marginTop: -2, width: '10%' }}
                                            />
                                            : val.iconType == 'Entypo' ?
                                                <Entypo
                                                    name={val.icon}
                                                    size={28}
                                                    color={'#9e9e9e'}
                                                    style={{ marginRight: vw * 0.02, marginTop: -2, width: '10%' }}
                                                /> : null

                                }
                                <View style={{ marginTop: vw * 0.01, width: '80%' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{val.name}</Text>
                                </View>
                                <TouchableOpacity>
                                    <Entypo
                                        name="chevron-right"
                                        size={26}
                                        color={'#9e9e9e'}
                                        style={{ justifyContent: 'flex-end', marginTop: vw * 0.01 }}
                                    />
                                </TouchableOpacity>

                            </View>
                        )
                    })}
                </View>
                <View style={{ marginTop: vh * 0.02, marginBottom: vh * 0.02 }}>
                    {thiredBlock.map(val => {
                        return (
                            <View style={{ flexDirection: 'row', paddingHorizontal: 5, backgroundColor: '#fff', borderTopWidth: 1, borderBottomWidth: 1, paddingVertical: 10, borderBottomColor: 'grey', borderTopColor: 'grey' }}>
                                {val.iconType == 'MaterialCommunityIcons' ?
                                    <MaterialCommunityIcons
                                        name={val.icon}
                                        size={28}
                                        color={'#9e9e9e'}
                                        style={{ marginRight: vw * 0.02, marginTop: -2, width: '10%' }}
                                    />
                                    :
                                    val.iconType == 'Ionicons' ?
                                        <Ionicons
                                            name={val.icon}
                                            size={28}
                                            color={'#9e9e9e'}
                                            style={{ marginRight: vw * 0.02, marginTop: -2, width: '10%' }}
                                        /> : val.iconType == 'Foundation' ?
                                            <Foundation
                                                name={val.icon}
                                                size={28}
                                                color={'#9e9e9e'}
                                                style={{ marginRight: vw * 0.02, marginTop: -2, width: '10%' }}
                                            />
                                            : val.iconType == 'Entypo' ?
                                                <Entypo
                                                    name={val.icon}
                                                    size={28}
                                                    color={'#9e9e9e'}
                                                    style={{ marginRight: vw * 0.02, marginTop: -2, width: '10%' }}
                                                /> : null

                                }
                                <View style={{ marginTop: vw * 0.01, width: '80%' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{val.name}</Text>
                                </View>
                                <TouchableOpacity>
                                    <Entypo
                                        name="chevron-right"
                                        size={26}
                                        color={'#9e9e9e'}
                                        style={{ justifyContent: 'flex-end', marginTop: vw * 0.01 }}
                                    />
                                </TouchableOpacity>

                            </View>
                        )
                    })}
                </View>


            </ScrollView>
        </View>
    )
}

export default Settings