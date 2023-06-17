import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a7cdeb",
    width: width,
    height: height,
  },

  button: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 80,
    height: 80,
    marginTop: -40, // Half of the height
    marginLeft: -40, // Half of the width
    borderRadius: 40,
    backgroundColor: '#a7cdeb',
    color: 'black',
    borderWidth: 0,
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    fontFamily: 'Georgia',
  },
  spinText: {
    fontFamily: 'Georgia',
    fontSize: 16,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 16,
    top: 50,
    fontFamily: 'Georgia',
  },
  arrow: {
    position: 'absolute',
    top: 250,
    left: '50%',
    transform: [{ translateX: -5 }],
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#000',
  },
});