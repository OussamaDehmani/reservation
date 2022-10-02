import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
// import SelectDropdown from 'react-native-select-dropdown'
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import SelectList from 'react-native-dropdown-select-list'
export default function App() {
  const d = new Date();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState(d);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const data = [
    {key:'1',value:'9-10'},
    {key:'2',value:'10-11'},
    {key:'3',value:'11-12'},
    {key:'5',value:'12-13'},
    {key:'6',value:'13-14'},
    {key:'7',value:'14-15'},
    {key:'8',value:'15-16'},
    {key:'9',value:'16-17'},
    {key:'10',value:'17-18'},
  ];

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
  function formatTime(date) {
    var d = new Date(date);
       
      
    return d.getHours() + ':' + d.getMinutes();
}
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {

    setDate(date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Text>Reservation APP</Text>
      <TextInput
        style={{
          height: 40,
          padding: 8,
          margin: 8,
          borderWidth: 1,
          borderRadius: 8,
          width: 200,
        }}
        placeholder="Type here to translate!"
        onChangeText={(newName) => setName(newName)}
        placeholder="Name ..."
      />
      <TextInput
        style={{
          height: 40,
          padding: 8,
          margin: 8,
          borderWidth: 1,
          borderRadius: 8,
          width: 200,
        }}
        placeholder="Type here to translate!"
        onChangeText={(newPhone) => setPhone(newPhone)}
        placeholder="Phone ..."
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
        }}
      >
       
        <Button
          style={styles.roundButton1}
          title="Date"
          onPress={showDatePicker}
        />
       
      <Text>{formatDate(date).toString()}</Text>
      </View>
     
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        
        <SelectList 
        setSelected={setTime} 
        // arrowicon={<FontAwesome name="chevron-down" size={12} color={'black'} />} 
        // searchicon={<FontAwesome name="search" size={12} color={'black'} />} 
        // defaultOption={{ key:'1', value:'9-10' }} 
        data={data}
        search={false} 
        
         onSelect={() => setTime(time)} />

      </View>
     
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        minimumDate={date}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  head: {
    padding: "10",
  },

});
