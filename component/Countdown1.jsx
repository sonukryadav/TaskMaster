import React from 'react';
import { View , Text, StyleSheet } from "react-native";
import { CountdownCircleTimer, useCountdown} from "react-native-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;


const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;


const Countdown1 = () => {
  const {
    path,
    pathLength,
    stroke,
    strokeDashoffset,
    remainingTime,
    elapsedTime,
    size,
    strokeWidth,
  } = useCountdown({ isPlaying: true, duration: 7, colors: '#abc' });

    return (
      <View styles={styles.view1}>
        <CountdownCircleTimer
          isPlaying={true}
          duration={100000}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 2 })}
          updateInterval={1}
        >
          {({ remainingTime, color }) => (
            <Text style={{ color, fontSize: 20 }}>{(remainingTime)}</Text>
          )}
        </CountdownCircleTimer>
      </View>
    );
}

const styles = StyleSheet.create({
    view1: {
        display: "flex",
        flexDirection:"row",
        justifyContent: "space-around",
        fontFamily: "sans-serif",
        textAlign: "center",
        paddingTop: 40,
    },
    time: {
        fontSize:15
    }
});

export default Countdown1;
