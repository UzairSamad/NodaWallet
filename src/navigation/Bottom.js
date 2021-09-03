import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from "../containers/Settings"
import { Text } from "react-native"
import Home from "../containers/Home"
import DApp from "../containers/DApp"
import Scanner from "../containers/Scanner"
import Exchange from "../containers/Exchange"
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <NavigationContainer>

            <Tab.Navigator

                tabBarOptions={{
                    activeTintColor: "#f6b819",
                    inactiveTintColor: "#a3a3a3",
                }}

            >
                <Tab.Screen

                    options={{
                        tabBarIcon: ({ focused, color }) => {
                            console.log(focused, "FFFFFFFFFF");
                            return (
                                <MaterialCommunityIcons
                                    name="wallet"
                                    size={28}
                                    color={focused ? "orange" : "#30BFE2"}
                                />
                            )
                        }
                    }}
                    name="Wallet" component={Home} />
                <Tab.Screen name="Scanner" component={Scanner}
                    options={{
                        tabBarIcon: ({ focused, color }) => {
                            return (
                                <MaterialCommunityIcons
                                    name="qrcode-scan"
                                    size={25}
                                    color={focused ? "orange" : "#30BFE2"}
                                />
                            )
                        }
                    }}
                />
                <Tab.Screen name="DApp" component={DApp}
                    options={{
                        tabBarIcon: ({ focused, color }) => {
                            return (
                                <SimpleLineIcons
                                    name="globe"
                                    size={25}
                                    color={focused ? "orange" : "#30BFE2"}
                                />
                            )
                        },

                    }}

                />
                <Tab.Screen name="Exchange" component={Exchange}
                    options={{
                        tabBarIcon: ({ focused, color }) => {
                            return (
                                <MaterialIcons
                                    name="loop"
                                    size={25}
                                    color={focused ? "orange" : "#30BFE2"}
                                />
                            )
                        }
                    }}
                />
                <Tab.Screen name="Settings" component={Settings}
                    options={{
                        tabBarIcon: ({ focused, color }) => {
                            return (
                                <Ionicons
                                    name="settings-sharp"
                                    size={25}
                                    color={focused ? "orange" : "#30BFE2"}
                                />
                            )
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>

    );
}

export default MyTabs