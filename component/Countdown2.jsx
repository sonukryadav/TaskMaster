import React, { useState } from 'react';
import { View, Text } from "react-native";
import CountDown from 'react-native-countdown-component';
import DialogCompo from './DialogCompo';
import { FontAwesome } from "react-native-vector-icons";

const Countdown2 = ({ item }) => {
    const [show, setShow] = useState(false);

    const cancel = () => {
        setShow(show => !show);
    }

    const okay = () => {
        setShow(show => !show);
    }

    return (
        <View>
            <CountDown
                until={5}
                onFinish={() =>setShow(true)}
                onPress={() => alert("hello")}
                size={15}
            />
            <DialogCompo
                status3={show}
                title3={`Your time is over for this task: \n \n${item.task}`}
                noLabel={<FontAwesome name="thumbs-down" size={50} color={"red"} />}
                noFun={cancel}
                ysLabel={<FontAwesome name="thumbs-up" size={50} color={"green"} />}
                ysFun={okay}
            />
        </View>
    );
}

export default Countdown2;
