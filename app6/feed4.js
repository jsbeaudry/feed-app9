import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Dimensions,
  ImageBackground,
  FlatList,
  ScrollView,
  Text,
  View,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
var formatter = new Intl.NumberFormat("en-US", {
  // style: "currency",
  // currency: "USD",
  // minimumFractionDigits: 2
});
export default class Intro1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Email: "",
      Password: ""
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff", paddingBottom: 0 }}>
        <View
          style={{
            height: 80,
            flexDirection: "row",
            backgroundColor: "transparent",
            marginBottom: 0,
            shadowColor: "#050135",
            shadowOpacity: 0.16,
            shadowRadius: 2,
            shadowOffset: {
              height: 1,
              width: 0
            }
          }}
        >
          <View
            style={{
              flex: 15,
              backgroundColor: "transparent",
              justifyContent: "center",
              alignItems: "flex-start"
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{ marginTop: 35, marginLeft: 26 }}
            >
              <Ionicons
                name="ios-arrow-back"
                type="ionicon"
                color={"#050135"}
                size={26}
                iconStyle={{}}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              flex: 50,
              marginTop: 50,
              color: "#fff",
              justifyContent: "center",
              textAlign: "center",
              color: "#050135",
              fontFamily: "Helvetica",
              fontSize: 16,
              fontWeight: "600"
            }}
          >
            {"MENU"}
          </Text>
          <View
            style={{
              flex: 15,
              backgroundColor: "transparent",
              justifyContent: "center",
              alignItems: "flex-end"
            }}
          />
        </View>

        <View style={{}}>
          <FlatList
            style={{ marginBottom: 100 }}
            numColumns={1}
            data={[
              { key: "b", image: require("./img.png"), name: "Coffee" },
              { key: "b", image: require("./img2.png"), name: "Tee" },
              { key: "b", image: require("./img3.png"), name: "Chocolate" },
              { key: "b", image: require("./img4.png"), name: "Cream" },
              { key: "b", image: require("./img5.png"), name: "Bread" },
              {
                key: "b",
                image: require("./img6.png"),
                name: "butter croissant"
              }
            ]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <ImageBackground
                source={item.image}
                style={{
                  margin: 2,
                  width: screenWidth - 5,
                  height: 120,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <View
                  style={{
                    backgroundColor: "rgba(0,0,0,.5)",
                    width: screenWidth - 5,
                    height: 120,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <View style={{ alignSelf: "center" }}>
                    <Text
                      style={{
                        margin: 10,
                        fontWeight: "bold",
                        fontSize: 20,
                        textAlign: "center",
                        color: "#fff"
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text style={{ marginLeft: 10, color: "#fff", width: 150 }}>
                      Freshly brewed coffee{" "}
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            )}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    fontWeight: "900"
    //  marginTop:moderateScale(-60, resizeFactor)
  },
  welcome: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#050135",
    marginTop: 100
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  someButtonStyle: {
    backgroundColor: "#000",
    color: "#FFFFFF"
  }
});
