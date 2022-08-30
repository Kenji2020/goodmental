import { View, TouchableOpacity,Platform,StatusBar, SafeAreaView} from "react-native";
import React from "react";

import { ArrowLeft } from "../svg";
import AppText from "./AppText";
import { colors } from "../theme";

export default function Header({ goBack = true, onPress, title, titleStyle,style }) {
    return (
        <SafeAreaView
            style={[{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              position:'relative',
              paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0
          },style]}
        >
            {goBack && (
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        left: 0,
                        paddingHorizontal: 20,
                        paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0
                    }}
                    onPress={onPress}
                >
                    <ArrowLeft />
                </TouchableOpacity>
            )}

            <AppText
                preset="h4"
                style={{
                    fontSize: 18,
                    color: colors.black,
                    ...titleStyle,
                }}
            >
                {title}
            </AppText>
        </SafeAreaView>
    );
}
