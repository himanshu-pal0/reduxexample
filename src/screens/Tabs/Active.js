import React, { Component, useEffect  } from "react";
import { View, Text, StyleSheet, Image, Dimensions, SafeAreaView, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LineChart } from "react-native-chart-kit";
import axios from 'react-native-axios';

const Active = () => {

  useEffect (() => {
    Hitapi();
  },[])

  const Hitapi = () => {
    axios({
      method: "get",
      url: "https://api.reward-dragon.com:8000/customers/customer-josh-reason-today/?user_profile=500/",
      headers: { 'Authorization': 'c3fb04334a7c647338cdfd500e2997bb9898cf52' }
    })
      .then((response) => {
        if (response.data.code == 200) {
          console.log("update skill", JSON.stringify(response.data));
          let message = response.data;
        }
      })
      .catch((error) => {
        console.warn("Login Error: ", error);
        if (error.response.status == 401) {
          Alert.alert("sessionexpired");
        } else {
          Alert.alert("errorapi");
        }
      });
  };
  const chartConfig = {
    backgroundColor: "transparent",
    backgroundGradientFrom: "#4f4f4f",
    backgroundGradientTo: "#4f4f4f",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => "#4f4f4f",
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "green",
    },
  };
  const screenWidth = Dimensions.get("window").width;

  const data = {
    labels: [
      "03/09/2022",
      "03/09/2022",
      "03/09/2022",
      "03/09/2022",
      "03/09/2022",
    ],
    datasets: [
      {
        data: [1, 3, 5, 9, 5],
        color: (opacity = 1) => "green", // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Rainy Days"], // optional
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
      <ScrollView>
        <LinearGradient
          colors={["#252525", "#4f4f4f", "#252525"]}
          style={styles.linearGradient}
        >
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              alignContent: "space-between",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="arrow-back" color="#fff" size={20} />
            <Text style={[styles.textstyle, { fontSize: 14, marginLeft: 50 }]}>
              Xcellence PVT LTD Company, Lucknow
            </Text>
            <View></View>
          </View>
          <View
            style={{ flexDirection: "row", padding: 10, alignItems: "center" }}
          >
            <View
              style={{
                height: 70,
                width: 70,
                backgroundColor: "red",
                borderRadius: 40,
                margin: 10,
              }}
            ></View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.textstyle}>Alok Maurya</Text>
              <Text style={styles.textstyle}>Developer</Text>
            </View>
          </View>

          <View
            style={{
              padding: 10,
              borderColor: "#d9a636",
              borderRadius: 10,
              borderWidth: 1,
              margin: 10,
            }}
          >
            <Text style={styles.subtext}>
              How's the <Text style={{ color: "#d9a636" }}>Mood</Text>{" "}
            </Text>
            <Text style={styles.subtext}>Today</Text>
            <Image
              source={require("../../assests/emoj.png")}
              style={{ alignSelf: "center" }}
            />
          </View>
          <View
            style={{ margin: 10, borderWidth: 1, borderColor: "#fff" }}
          ></View>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <MaterialCommunityIcons
              name="speedometer"
              size={20}
              color="#d9a636"
            />
            <Text style={[styles.subtext, { marginLeft: 20 }]}>Team Mood </Text>
            <View
              style={{
                marginLeft: 10,
                borderWidth: 1,
                borderColor: "#fff",
                width: "60%",
                height: 0,
                alignSelf: "center",
              }}
            ></View>
          </View>

          <View
            style={{
              padding: 10,
              borderColor: "#d9a636",
              borderRadius: 10,
              borderWidth: 1,
              margin: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={[
                styles.subtext,
                { fontSize: 22, width: "80%", textAlign: "center" },
              ]}
            >
              <Text style={{ color: "#d9a636" }}>"</Text>The Team is felling
              good today <Text style={{ color: "#d9a636" }}>"</Text>{" "}
            </Text>
            <Image
              source={require("../../assests/emojis.jpg")}
              style={{
                width: 50,
                height: 50,
                resizeMode: "contain",
                marginLeft: 10,
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              padding: 10,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assests/emoj2.jpg")}
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: "contain",
                  marginLeft: 10,
                }}
              />
              <Text style={[styles.subtext, { marginLeft: 15 }]}>
                Moodalytics
              </Text>
            </View>
            <Text style={[styles.subtext, { fontSize: 14 }]}>
              ( Trend chat on mood)
            </Text>
          </View>
          <View>
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              withVerticalLabels={true}
              verticalLabelRotation={true}
            />
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Active;

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  textstyle: {
    color: "#fff",
    marginLeft: 20,
    alignSelf: "center",
    fontSize: 16,
  },
  subtext: {
    fontSize: 18,
    color: "white",
  },
});
