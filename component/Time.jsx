import React, { useState, useContext } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "react-native-vector-icons"
import { mycontext } from "./Context1";

const Time = () => {
  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
    const { timeC, setTimeC, dateC, setDateC } = useContext(mycontext);

  const handleTimeSelection = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
    setTimeC(currentTime);
  };

  console.log(time);

 return (
   <View>
      <View>
        <TouchableOpacity onPress={() => setShowTimePicker(true)}>
          <Text>
            <Ionicons name="time-outline" size={48} color={"black"} /> {"\n"} Time
          </Text>
        </TouchableOpacity>
      </View>

     {showTimePicker && (
       <DateTimePicker
         value={time}
         mode="time"
         display="default"
         onChange={handleTimeSelection}
         is24Hour={false}
       />
     )}
   </View>
 );
};

const styles = StyleSheet.create({
  date: {
    fontSize: 15,
    backgroundColor: "black",
    color: "white",
    padding: 10,
    marginHorizontal: 10,
  },
});

export default Time;
