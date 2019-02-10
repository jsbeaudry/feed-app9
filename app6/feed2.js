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
      <View style={{ flex: 1, backgroundColor: "#fff", paddingBottom: 80 }}>
        <ImageBackground
          source={require("./bg1.png")}
          style={{ width: screenWidth, height: 200 }}
        >
          <View
            style={{
              width: screenWidth,
              height: 200,

              backgroundColor: "rgba(0,0,0,.5)"
            }}
          >
            <View
              style={{
                height: 100,
                flexDirection: "row",
                backgroundColor: "transparent",
                marginBottom: 10,
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
                  marginTop: 58,
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
            <View style={{ height: 80 }}>
              <Text
                style={{
                  margin: 10,
                  fontSize: 22,
                  color: "#fff",
                  textAlign: "center"
                }}
              >
                The Science of Delicious.
              </Text>
              <Text style={{ marginLeft: 10, textAlign: "center" }}>
                Amazing coffees from around the world!{" "}
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View style={{ marginBottom: 70 }}>
          <FlatList
            style={{ marginBottom: 50 }}
            numColumns={2}
            data={[
              { key: "b", image: require("./image1.png") },
              { key: "b", image: require("./image2.png") },
              { key: "b", image: require("./image3.png") },
              { key: "b", image: require("./image1.png") },
              { key: "b", image: require("./image1.png") }
            ]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: "#fff",
                  margin: 5,
                  width: (screenWidth - 25) / 2,
                  height: 260,
                  borderColor: "#eee",
                  borderWidth: 1
                }}
              >
                <View style={{ height: 80 }}>
                  <Text style={{ margin: 10, color: "grey" }}>COFFEE</Text>
                  <Text style={{ marginLeft: 10, width: 150 }}>
                    Freshly brewed coffee{" "}
                  </Text>
                </View>
                <Image
                  source={item.image}
                  style={{ width: 140, height: 140, alignSelf: "center" }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginLeft: 20,
                    marginRight: 20
                  }}
                >
                  <Text style={{ color: "green" }}>12 HTG</Text>
                  <Ionicons
                    name="ios-heart"
                    type="ionicon"
                    color={"red"}
                    size={16}
                    iconStyle={{}}
                  />
                </View>
              </View>
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
