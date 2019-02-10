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
              { key: "b", image: require("./image1.png"), nblike: 5334 },
              { key: "b", image: require("./image2.png"), nblike: 3424 },
              { key: "b", image: require("./image3.png"), nblike: 1286 },
              { key: "b", image: require("./image4.png"), nblike: 8742 },
              { key: "b", image: require("./image5.png"), nblike: 1532 },
              { key: "b", image: require("./image6.png"), nblike: 2073 },
              { key: "b", image: require("./image2.png"), nblike: 2019 },
              { key: "b", image: require("./image3.png"), nblike: 2732 }
            ]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: "#fff",
                  margin: 5,
                  width: screenWidth - 10,
                  height: 120,
                  borderBottomColor: "#eee",
                  flexDirection: "row",
                  borderBottomWidth: 1
                }}
              >
                <Image
                  source={item.image}
                  style={{ width: 80, height: 80, alignSelf: "center" }}
                />
                <View style={{ backgroundColor: "#fff", width: 280 }}>
                  <View style={{ marginBottom: 20, marginTop: 10 }}>
                    <Text style={{ margin: 10, color: "grey" }}>COFFEE</Text>
                    <Text style={{ marginLeft: 10, width: 150 }}>
                      Freshly brewed coffee{" "}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",

                      height: 40,
                      marginLeft: 10,
                      marginRight: 20
                    }}
                  >
                    <Text style={{ color: "green", fontWeight: "bold" }}>
                      12 HTG
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <Ionicons
                        name="ios-heart"
                        type="ionicon"
                        color={"red"}
                        size={18}
                        iconStyle={{}}
                      />
                      <Text style={{ color: "grey", marginLeft: 5 }}>
                        {formatter.format(item.nblike)}
                      </Text>
                    </View>
                  </View>
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
