import React from "react";
import {
    TouchableOpacity,
    Text,
    Image
} from "react-native";
import {
    FONTS, COLORS
} from "../constants";
import {Touchable} from "react-native-web";


const TextIconButton = ({containerStyle, label, labelStyle, icon, iconStyle, onPress}) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Text
                style={{
                    // ...FONTS.body3
                    ...labelStyle
                }}
            >
                {label}
            </Text>

            <Image
                source={icon}
                style={{
                    marginLeft: 5,
                    width: 20,
                    height: 20,
                    tintColor: COLORS.black,
                    ...iconStyle
                }}
            >
            </Image>

        </TouchableOpacity>
    )
}

export default TextIconButton












