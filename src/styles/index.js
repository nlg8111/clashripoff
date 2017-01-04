import {StyleSheet} from "react-native"

export default StyleSheet.create({
  background: {
    backgroundColor: "#000000",
  },
  backgroundImage: {
    flex: 1,
    alignSelf: "stretch",
    width: undefined,
    height: undefined,
    backgroundColor:"transparent",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  centerContent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  block: {
    backgroundColor: "#000000",
    borderColor: "#ffffff",
    borderWidth: 1,
  },
  text: {
    color: "#ffffff"
  },
  button: {
    backgroundColor: "#000000",
    borderColor: "#ffffff",
    color: "#ffffff",
    padding: 5,
    margin: 15,
    fontSize: 20,
    borderWidth: 1,
  },
  unit: {
    position: "absolute",
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#ffffff",
    width: 15,
    height: 15
  },
  debug: {
    borderWidth: 2,
    borderRadius: 0,
    borderColor: "yellow",
  }
})
