import React from 'react';
import { View, Text } from "react-native";
import CountDown from 'react-native-countdown-component';

const Countdown2 = () => {
    return (
        <View>
            <CountDown
                until={10000}
                onFinish={() => alert("finished")}
                onPress={() => alert("hello")}
                size={15}
            />
        </View>
    );
}

export default Countdown2;
