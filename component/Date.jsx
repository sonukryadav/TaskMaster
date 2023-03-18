import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Fontisto  } from "react-native-vector-icons";

const Date1 = () => {
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);


    const handleDateSelection = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };


    return (
      <View>
        <View>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Text style={{textAlign:"center"}}> <Fontisto name="date" size={45} color={"black"} /> {"\n"} Date </Text>
          </TouchableOpacity>
        </View>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateSelection}
            minimumDate={new Date()}
          />
        )}

      </View>
    );
}


const styles = StyleSheet.create({
    date: {
        fontSize: 15,
        backgroundColor: "black",
        color: "white",
        padding: 10,
        marginHorizontal:10
    }
});

export default Date1;
