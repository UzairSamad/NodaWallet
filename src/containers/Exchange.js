import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Image } from "react-native"
import Feather from "react-native-vector-icons/Feather"
import { vh, vw } from "../constants"

const Exchange = () => {
    const [modalData, setModalData] = useState([
        { name: 'BTC', value: '0.00 BTC' },
        { name: 'LTC', value: '0.00 LTC' },
        { name: 'BNB', value: '0.00 BNB' },
        { name: 'BCH', value: '0.00 BCH' },
        { name: 'USDT20', value: '0.00 USDT20' },
    ])
    const [showModal, setShowModal] = useState(false)
    const [pay, setPay] = useState('')
    const [get, setGet] = useState('')
    const handleChange = (text) => {
        setPay(text)
        // setGet(2)
    }
    return (
        <View style={{ backgroundColor: "#eeeeee", flex: 1 }}>
            <View style={{ backgroundColor: 'orange', alignItems: 'center', flex: 0.12, justifyContent: 'center' }}><Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', alignItems: 'center', alignSelf: 'center' }}>Exchange</Text></View>
            <View style={{ backgroundColor: '#fff', paddingHorizontal: vw * 0.02, borderRadius: 8, marginHorizontal: vw * 0.04, marginTop: vh * 0.08, paddingVertical: vh * 0.01, flex: 0.6 }}>
                <View style={{ flexDirection: 'row', paddingBottom: 3 }}>
                    <Feather
                        name="refresh-ccw"
                        size={14}
                        color={'#9e9e9e'}
                    />
                    <Text style={{ marginLeft: 5, fontSize: 14, marginTop: -3, fontWeight: 'bold', color: '#9e9e9e' }}>Exchange</Text>
                </View>
                <View style={{ backgroundColor: '#e0e0e0', paddingHorizontal: 10, borderRadius: 5, paddingVertical: 10, flexDirection: 'row' }}>
                    <View>
                        <Text>You Pay</Text>
                        <TextInput placeholder="0.00" value={pay} onChangeText={(text) => {handleChange(text) }}
                            keyboardType='phone-pad'
                        ></TextInput>
                        <Text >Balance : 0.00000000</Text>
                    </View>
                    <View style={{ paddingTop: vh * 0.025, marginLeft: vw * 0.08 }} >
                        <Image source={require('../asests/logo.jpg')} style={{ width: 35, height: 35, borderRadius: 25 }} />
                    </View>
                    <Text style={{ paddingTop: vh * 0.035, marginLeft: vw * 0.02 }}>ETH</Text>
                    <TouchableOpacity style={{ paddingTop: vh * 0.035, marginLeft: vw * 0.05, marginTop: -5 }} onPress={_ => setShowModal(true)}>
                        <Feather
                            name="chevron-down"
                            size={32}
                            color={'#9e9e9e'}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#e0e0e0', paddingHorizontal: 10, borderRadius: 5, paddingVertical: 10, flexDirection: 'row', marginTop: 5 }}>
                    <View>
                        <Text>You Are Getting</Text>
                        <TextInput placeholder="0.00" value={pay}></TextInput>
                        <Text >Balance : 0.00000000</Text>
                    </View>
                    <View style={{ paddingTop: vh * 0.025, marginLeft: vw * 0.08 }} >
                        <Image source={require('../asests/logo.jpg')} style={{ width: 35, height: 35, borderRadius: 25 }} />
                    </View>
                    <Text style={{ paddingTop: vh * 0.035, marginLeft: vw * 0.02 }}>BTC</Text>
                    <TouchableOpacity style={{ paddingTop: vh * 0.035, marginLeft: vw * 0.05, marginTop: -5 }} onPress={_ => setShowModal(true)}>
                        <Feather
                            name="chevron-down"
                            size={32}
                            color={'#9e9e9e'}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                    <Text> 1ETH = 0.0759 BTC</Text>
                    <View>
                        <Text>Min 0.0195 ETH</Text>
                        <Text>   Max 200 ETH</Text>
                    </View>
                </View>

            </View>
            <TouchableOpacity style={{ backgroundColor: 'orange', width: '50%', borderRadius: 5, alignSelf: 'center', marginTop: vh * 0.05, paddingVertical: vh * 0.009, alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Further</Text>
            </TouchableOpacity>
            {showModal ?
                <View style={{ flex: 0.3, paddingVertical: 3, backgroundColor: '#fff', borderTopEndRadius: 10, borderTopStartRadius: 10 }}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#fff', paddingHorizontal: 5, borderRadius: 5, marginHorizontal: 5 }}>
                        <Feather name='search' size={15} style={{ marginTop: 12 }} />
                        <TextInput placeholder='search' style={{ height: 40 }} />
                    </View>
                    <FlatList
                        style={{ marginVertical: 5 }}
                        data={modalData}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 3 }} onPress={_ => setShowModal(false)}>
                                    <Text>{item.name}</Text>
                                    <Text>{item.value}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />

                </View>
                : null}
        </View>
    )
}

export default Exchange