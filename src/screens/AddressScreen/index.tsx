import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/Button";
import CountryList from "country-list";



const AddressScreen = () => {

    const countries = CountryList.getData();
    const[country, setCountry] = useState(countries[0].code);
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [addressError, setAddressError] = useState('');


    const onCheckout = () => {
        
        if(!!addressError) {

            Alert.alert('Fix all field error before submiting');
            return;
        }

        if(!fullname) {

            Alert.alert('Please fill in the fullname field');
            return;
        }

        if(!phone) {

            Alert.alert('Please fill in the phone number field');
            return;
        };


    };


    const validateAddress = () =>{

        if(address.length <3) {

            setAddressError('Address is too short');
        }

        
    }
return (

        <KeyboardAvoidingView 
        behavior={Platform.OS ==='ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10: 0}
        >
        <ScrollView style={Styles.root}>
           <View style={Styles.row}>
                <Picker>
                    {countries.map(country => (
                        
                        <Picker.Item value={country.code} label={country.name} />
                        ))}
                    
                </Picker>

           </View>
            {/* full name */}
           <View style={Styles.row}>
            <Text style={Styles.label}>Full name (First and Last name)</Text>
            <TextInput style={Styles.input} placeholder="Full name" value={fullname} onChangeText={setFullname} />
            
           </View>

            {/* phone number */}
           <View style={Styles.row}>
            <Text style={Styles.label}>Phone number</Text>
            <TextInput style={Styles.input} placeholder="Phone number" value={phone} onChangeText={setPhone}
            
            keyboardType={"phone-pad"}
        
            />
            
           </View>


             {/* Address */}
             <View style={Styles.row}>
            <Text style={Styles.label}>Address</Text>
            <TextInput style={Styles.input} placeholder="Address" 
            value={address}
            onEndEditing={validateAddress}
             onChangeText={(text) => {setAddress(text); setAddressError(''); }}
            />

            {!!addressError && (
                <Text style={Styles.errorLabel}>{addressError}</Text>

            )}
            
           </View>

           {/* City */}
           <View style={Styles.row}>
            <Text style={Styles.label}>City</Text>
            <TextInput style={Styles.input}
             placeholder="City" 
             value={city} 
             onChangeText={setCity}
            />
            
           </View>

           <Button text="Checkout" onPress={onCheckout} />

        </ScrollView>
        </KeyboardAvoidingView>

);



}

const Styles = StyleSheet.create({

    root:{
        padding:10,
    },

    row:{
        marginVertical:5,
    },

    label:{
        fontWeight:'bold',
    },

    input:{

        backgroundColor:'white',
        padding:5,
        marginVertical:5,
        height:40,
        borderWidth:1,
        borderColor:'lightgrey',
        borderRadius:2,
    },

    errorLabel:{
        color:'red',
    },

})


export default AddressScreen;