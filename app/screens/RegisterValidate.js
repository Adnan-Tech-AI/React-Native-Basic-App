import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Button, Text, ScrollView, TextInput } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';


import { SelectList } from 'react-native-dropdown-select-list';
import RadioButtonRN from 'radio-buttons-react-native';


import { Formik, Form, Field } from "formik";
import * as yup from 'yup';


const countries = [
    { key: "IN", value: "India" },
    { key: "PK", value: "Pakistan" },
    { key: "US", value: "United States Of America" },
    { key: "UAE", value: "UAE" }
];

const cities = {
    'IN': [
        { key: "1", value: "New Delhi" },
        { key: "2", value: "Hyderabad" },
        { key: "3", value: "Pune" },
        { key: "4", value: "Mumbai" },
    ],
    'PK': [
        { key: "5", value: "Islamabad" },
        { key: "6", value: "Lahore" },
        { key: "7", value: "Karachi" },
    ],
    'US': [
        { key: "8", value: "Washington DC" },
        { key: "9", value: "New York" },
        { key: "10", value: "Chicago" },
    ],
    'UAE': [
        { key: "11", value: "Abu Dhabi" },
        { key: "12", value: "Dubai" },
        { key: "13", value: "Sharjah" },
    ],

}

const data = [{ label: "Male" }, { label: "Female" }];


function RegisterValidate({ navigation }) {

    const [mycountry, setmyCountry] = useState("IN");
    const [mycity, setmyCity] = useState("");


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const userData = await AsyncStorage.getItem("currentUser");
    //             console.log(userData);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    const handleData = (values) => {
        try {
            console.log(values)
            AsyncStorage.setItem(values.name, JSON.stringify({ ...values, mycountry, mycity }));
            alert("Registered Successfully")
        } catch (error) {
            // console.log(values);
            console.log(error)
            alert("Sorry Could Not Register")

        }
    };

    return (
        <ScrollView style={styles.screen}>
            <View style={{ top: 10 }}>
                <Formik
                    initialValues={{ name: "", email: "", password: "", mobile: null, address: "", confirmpassword: "", gender: "" }}
                    onSubmit={(values) => handleData(values)}
                    validationSchema={yup.object().shape({
                        name: yup.string().required("*This field is required"),
                        email: yup.string().required("*This field is required").email("Enter correct email"),
                        password: yup.string().required("*This field is required").min(4),
                        mobile: yup.number("Enter Mobile in digits").required("*This field is required"),
                        address: yup.string().required("*This field is required"),
                        gender: yup.string().required("*This field is required"),
                    })} >
                    {({ handleChange, errors, values, handleSubmit, handleBlur, touched }) => (
                        <>
                            <TextInput style={styles.input} placeholder="Enter Your Name" onChangeText={handleChange("name")} onBlur={handleBlur("name")} />
                            {errors.name && touched.name ? (<Text style={{ fontSize: 15, color: "red", fontWeight: "bold", marginVertical: 5 }}>{errors.name}</Text>) : null}
                            <TextInput placeholder="Email" autoCapitalize="none" autoCorrect={false} keyboardType="email-address" textContentType='emailAddress' onChangeText={handleChange("email")} style={styles.input} onBlur={() => handleBlur("email")} />
                            {errors.email && touched.email ? (<Text style={{ fontSize: 15, color: "black", fontWeight: "bold", marginVertical: 3 }}>{errors.email}</Text>) : null}
                            <TextInput style={styles.input} placeholder="Enter Your Mobile No." onChangeText={handleChange("mobile")} keyboardType="numeric" onBlur={() => handleBlur("mobile")} />
                            {errors.mobile && <Text style={{ fontSize: 15, color: "black", fontWeight: "bold", marginVertical: 5 }}>Enter correct mobile no.</Text>}
                            <TextInput style={styles.input} placeholder="Enter Your Address" onChangeText={handleChange("address")} multiline={true} numberOfLines={2} onBlur={() => handleBlur("address")}></TextInput>
                            {errors.address && <Text style={{ fontSize: 15, color: "black", fontWeight: "bold", marginVertical: 5 }}>{errors.address}</Text>}
                            <SelectList
                                setSelected={setmyCountry}
                                data={countries}
                                placeholder={"Select Country"}
                                boxStyles={{ margin: 10, paddingHorizontal: 8, }}
                            />
                            <SelectList
                                setSelected={setmyCity}
                                boxStyles={{ marginTop: 8, marginBottom: 8, margin: 10, paddingHorizontal: 8, }}
                                data={cities[mycountry]}
                                placeholder={"Select City"}
                            />
                            <TextInput placeholder="Password" autoCapitalize="none" autoCorrect={false} textContentType='password' secureTextEntry onChangeText={handleChange("password")} style={styles.input} onBlur={() => handleBlur("password")} />
                            {errors.password && <Text style={{ fontSize: 15, color: "black", fontWeight: "bold", marginVertical: 5 }}>{errors.password}</Text>}
                            <RadioButtonRN data={data} selectedBtn={(text) => handleChange(text.label, "gender")} style={styles.rdbtn} />
                            <Button type="submit" title='Submit' onPress={() => handleData(values)} />
                        </>
                    )}
                </Formik>

            </View>
        </ScrollView>
    );
}

export default RegisterValidate;


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white",

    },
    button: {
        top: 10,
        backgroundColor: "black",
        width: "100%",
        height: "7%",

    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "gray",
        margin: 10,
    },
    rdbtn: {
        margin: 10,
        width: "50%",
        height: 50,
        marginBottom: 90,
    }

})

