import React from "react"
import { View, Text, SafeAreaView, Image, Linking, Touchable, TouchableOpacity, ScrollView, TextInput } from "react-native"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import EvilIcons from "react-native-vector-icons/EvilIcons"

const DApps = () => {
    return (
        <SafeAreaView style={{ backgroundColor: "#BEBEBE", flex: 1 }}>
            <View style={{ height: 60, backgroundColor: "#f6b819" }}>
                <View style={{
                    backgroundColor: "white", marginTop: 10,
                    marginHorizontal: 10, borderRadius: 10, height: 40,
                    flexDirection: "row",
                    alignItems:"center",
                    justifyContent:'space-between'
                }}>
                    <TextInput
                        placeholder="Search or Type Url"
                        style={{
                            fontSize: 12,
                            paddingLeft: 10
                        }}
                    />
                    <EvilIcons name="search" size={24} style={{marginRight:10}} />
                </View>
            </View>
            <ScrollView>
                <View style={{ marginHorizontal: 10, }}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{
                            fontSize: 16, fontWeight: "bold", color: "#f6b819"
                        }}>IDO Noda Network</Text>
                    </View>
                    <View style={{
                        flexDirection: "row", alignItems: "center", backgroundColor: "white", marginTop: 10, height: 50,
                        borderRadius: 10,
                    }}>
                        <Image
                            style={{ height: 35, width: 35, borderRadius: 200, marginLeft: 10 }}
                            source={require("../asests/logo.jpg")} />
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ fontWeight: "bold" }}>Noda Network</Text>
                            <Text style={{ color: "#707070" }}>https://nodeexpanse.com/</Text>
                        </View>
                        <View style={{ alignItems: 'center', right: 0, position: "absolute", marginRight: 15 }}>
                            <TouchableOpacity onPress={() => Linking.openURL("https://nodeexpanse.com/")}>
                                <MaterialIcons name="arrow-forward-ios" size={24} color="#a3a3a3" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ marginHorizontal: 10, }}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{
                            fontSize: 16, fontWeight: "bold", color: "#f6b819"
                        }}>Market Analytics</Text>
                    </View>
                    <View style={{
                        flexDirection: "row", alignItems: "center", backgroundColor: "white", marginTop: 10, height: 50,
                        borderRadius: 10,
                    }}>
                        <Image
                            style={{ height: 35, width: 35, borderRadius: 200, marginLeft: 10 }}
                            source={require("../asests/logo.jpg")} />
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ fontWeight: "bold" }}>IntoTheBlock Analytics Platform</Text>
                            <Text style={{ color: "#707070" }}>https://www.intotheblock.com/</Text>
                        </View>
                        <View style={{ alignItems: 'center', right: 0, position: "absolute", marginRight: 15 }}>
                            <TouchableOpacity onPress={() => Linking.openURL("https://www.intotheblock.com/")}>
                                <MaterialIcons name="arrow-forward-ios" size={24} color="#a3a3a3" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row", alignItems: "center", backgroundColor: "white", marginTop: 10, height: 50,
                        borderRadius: 10,
                    }}>
                        <Image
                            style={{ height: 35, width: 35, borderRadius: 200, marginLeft: 10 }}
                            source={require("../asests/logo.jpg")} />
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ fontWeight: "bold" }}>NodaResearch</Text>
                            <Text style={{ color: "#707070" }}>https://t.me/noda_research.com/</Text>
                        </View>
                        <View style={{ alignItems: 'center', right: 0, position: "absolute", marginRight: 15 }}>
                            <TouchableOpacity onPress={() => Linking.openURL("https://t.me/noda_research.com/")}>
                                <MaterialIcons name="arrow-forward-ios" size={24} color="#a3a3a3" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row", alignItems: "center", backgroundColor: "white", marginTop: 10, height: 50,
                        borderRadius: 10,
                    }}>
                        <Image
                            style={{ height: 35, width: 35, borderRadius: 200, marginLeft: 10 }}
                            source={require("../asests/logo.jpg")} />
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ fontWeight: "bold" }}>TradingView</Text>
                            <Text style={{ color: "#707070" }}>https://tradingview.com/</Text>
                        </View>
                        <View style={{ alignItems: 'center', right: 0, position: "absolute", marginRight: 15 }}>
                            <TouchableOpacity onPress={() => Linking.openURL("https://nodeexpanse.com/")}>
                                <MaterialIcons name="arrow-forward-ios" size={24} color="#a3a3a3" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ marginHorizontal: 10, }}>
                    <View style={{ marginTop: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 10 }}>
                        <Text style={{
                            fontSize: 16, fontWeight: "bold", color: "#f6b819"
                        }}>Popular</Text>
                        <Text style={{
                            fontSize: 12, fontWeight: "bold", color: "black"
                        }}>See All</Text>
                    </View>
                    <View style={{
                        flexDirection: "row", alignItems: "center", backgroundColor: "white", marginTop: 10, height: 50,
                        borderRadius: 10,
                    }}>
                        <Image
                            style={{ height: 35, width: 35, borderRadius: 200, marginLeft: 10 }}
                            source={require("../asests/logo.jpg")} />
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ fontWeight: "bold" }}>P2PB2B</Text>
                            <Text style={{ color: "#707070" }}>https://p2pbpbb.io/</Text>
                        </View>
                        <View style={{ alignItems: 'center', right: 0, position: "absolute", marginRight: 15 }}>
                            <TouchableOpacity onPress={() => Linking.openURL("https://p2pbpbb.io/")}>
                                <MaterialIcons name="arrow-forward-ios" size={24} color="#a3a3a3" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row", alignItems: "center", backgroundColor: "white", marginTop: 10, height: 50,
                        borderRadius: 10,
                    }}>
                        <Image
                            style={{ height: 35, width: 35, borderRadius: 200, marginLeft: 10 }}
                            source={require("../asests/logo.jpg")} />
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ fontWeight: "bold" }}>Noda Network</Text>
                            <Text style={{ color: "#707070" }}>https://nodeexpanse.com/</Text>
                        </View>
                        <View style={{ alignItems: 'center', right: 0, position: "absolute", marginRight: 15 }}>
                            <TouchableOpacity onPress={() => Linking.openURL("https://nodeexpanse.com/")}>
                                <MaterialIcons name="arrow-forward-ios" size={24} color="#a3a3a3" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row", alignItems: "center", backgroundColor: "white", marginTop: 10, height: 50,
                        borderRadius: 10,
                    }}>
                        <Image
                            style={{ height: 35, width: 35, borderRadius: 200, marginLeft: 10 }}
                            source={require("../asests/logo.jpg")} />
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ fontWeight: "bold" }}>Noda Network</Text>
                            <Text style={{ color: "#707070" }}>https://nodeexpanse.com/</Text>
                        </View>
                        <View style={{ alignItems: 'center', right: 0, position: "absolute", marginRight: 15 }}>
                            <TouchableOpacity onPress={() => Linking.openURL("https://nodeexpanse.com/")}>
                                <MaterialIcons name="arrow-forward-ios" size={24} color="#a3a3a3" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row", alignItems: "center", backgroundColor: "white", marginTop: 10, height: 50,
                        borderRadius: 10,
                    }}>
                        <Image
                            style={{ height: 35, width: 35, borderRadius: 200, marginLeft: 10 }}
                            source={require("../asests/logo.jpg")} />
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ fontWeight: "bold" }}>Noda Network</Text>
                            <Text style={{ color: "#707070" }}>https://nodeexpanse.com/</Text>
                        </View>
                        <View style={{ alignItems: 'center', right: 0, position: "absolute", marginRight: 15 }}>
                            <TouchableOpacity onPress={() => Linking.openURL("https://nodeexpanse.com/")}>
                                <MaterialIcons name="arrow-forward-ios" size={24} color="#a3a3a3" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row", alignItems: "center", backgroundColor: "white", marginTop: 10, height: 50,
                        borderRadius: 10,
                    }}>
                        <Image
                            style={{ height: 35, width: 35, borderRadius: 200, marginLeft: 10 }}
                            source={require("../asests/logo.jpg")} />
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ fontWeight: "bold" }}>Noda Network</Text>
                            <Text style={{ color: "#707070" }}>https://nodeexpanse.com/</Text>
                        </View>
                        <View style={{ alignItems: 'center', right: 0, position: "absolute", marginRight: 15 }}>
                            <TouchableOpacity onPress={() => Linking.openURL("https://nodeexpanse.com/")}>
                                <MaterialIcons name="arrow-forward-ios" size={24} color="#a3a3a3" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ marginHorizontal: 10, }}>
                    <View style={{ marginTop: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 10 }}>
                        <Text style={{
                            fontSize: 16, fontWeight: "bold", color: "#f6b819"
                        }}>Expenses</Text>
                        <Text style={{
                            fontSize: 12, fontWeight: "bold", color: "black"
                        }}>See All</Text>
                    </View>
                    <View style={{
                        flexDirection: "row", alignItems: "center", backgroundColor: "white", marginTop: 10, height: 50,
                        borderRadius: 10,
                    }}>
                        <Image
                            style={{ height: 35, width: 35, borderRadius: 200, marginLeft: 10 }}
                            source={require("../asests/logo.jpg")} />
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ fontWeight: "bold" }}>P2PB2B</Text>
                            <Text style={{ color: "#707070" }}>https://p2pbpbb.io/</Text>
                        </View>
                        <View style={{ alignItems: 'center', right: 0, position: "absolute", marginRight: 15 }}>
                            <TouchableOpacity onPress={() => Linking.openURL("https://p2pbpbb.io/")}>
                                <MaterialIcons name="arrow-forward-ios" size={24} color="#a3a3a3" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row", alignItems: "center", backgroundColor: "white", marginTop: 10, height: 50,
                        borderRadius: 10,
                    }}>
                        <Image
                            style={{ height: 35, width: 35, borderRadius: 200, marginLeft: 10 }}
                            source={require("../asests/logo.jpg")} />
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ fontWeight: "bold" }}>Noda Network</Text>
                            <Text style={{ color: "#707070" }}>https://nodeexpanse.com/</Text>
                        </View>
                        <View style={{ alignItems: 'center', right: 0, position: "absolute", marginRight: 15 }}>
                            <TouchableOpacity onPress={() => Linking.openURL("https://nodeexpanse.com/")}>
                                <MaterialIcons name="arrow-forward-ios" size={24} color="#a3a3a3" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row", alignItems: "center", backgroundColor: "white", marginTop: 10, height: 50,
                        borderRadius: 10,
                    }}>
                        <Image
                            style={{ height: 35, width: 35, borderRadius: 200, marginLeft: 10 }}
                            source={require("../asests/logo.jpg")} />
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ fontWeight: "bold" }}>Noda Network</Text>
                            <Text style={{ color: "#707070" }}>https://nodeexpanse.com/</Text>
                        </View>
                        <View style={{ alignItems: 'center', right: 0, position: "absolute", marginRight: 15 }}>
                            <TouchableOpacity onPress={() => Linking.openURL("https://nodeexpanse.com/")}>
                                <MaterialIcons name="arrow-forward-ios" size={24} color="#a3a3a3" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row", alignItems: "center", backgroundColor: "white", marginTop: 10, height: 50,
                        borderRadius: 10,
                    }}>
                        <Image
                            style={{ height: 35, width: 35, borderRadius: 200, marginLeft: 10 }}
                            source={require("../asests/logo.jpg")} />
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ fontWeight: "bold" }}>Noda Network</Text>
                            <Text style={{ color: "#707070" }}>https://nodeexpanse.com/</Text>
                        </View>
                        <View style={{ alignItems: 'center', right: 0, position: "absolute", marginRight: 15 }}>
                            <TouchableOpacity onPress={() => Linking.openURL("https://nodeexpanse.com/")}>
                                <MaterialIcons name="arrow-forward-ios" size={24} color="#a3a3a3" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row", alignItems: "center", backgroundColor: "white", marginTop: 10, height: 50,
                        borderRadius: 10,
                    }}>
                        <Image
                            style={{ height: 35, width: 35, borderRadius: 200, marginLeft: 10 }}
                            source={require("../asests/logo.jpg")} />
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ fontWeight: "bold" }}>Noda Network</Text>
                            <Text style={{ color: "#707070" }}>https://nodeexpanse.com/</Text>
                        </View>
                        <View style={{ alignItems: 'center', right: 0, position: "absolute", marginRight: 15 }}>
                            <TouchableOpacity onPress={() => Linking.openURL("https://nodeexpanse.com/")}>
                                <MaterialIcons name="arrow-forward-ios" size={24} color="#a3a3a3" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default DApps