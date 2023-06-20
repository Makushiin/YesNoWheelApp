import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { Easing } from "react-native";
import { styles } from "./styles";
import CircleDivider from "./CircleDivider";

const App = () => {
  const [result, setResult] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);

  const spinWheel = () => {
    if (isSpinning) {
      return; // Ignore if spinning is already in progress
    }

    setResult("");
    setIsSpinning(true);

    const segmentCount = 8;
    const minDegrees = 2080;
    const maxDegrees = 2860;
    const randomDegrees =
      Math.floor(Math.random() * (maxDegrees - minDegrees + 1)) + minDegrees;

    const duration = 3000;

    wheelRef
      .animate({
        from: { rotate: "0deg" },
        to: { rotate: `${randomDegrees}deg` },
        duration,
        easing: Easing.inOut(Easing.quad), // Apply easing in and out effect
      })
      .then(() => {
        const rotationValue = randomDegrees % 360;
        const topSegmentIndex = Math.floor(
          rotationValue / (360 / segmentCount)
        );

        const texts = ["YES", "NO"];
        const topSegmentText = texts[topSegmentIndex % texts.length];

        setResult(topSegmentText);
        setIsSpinning(false);
      });
  };

  let wheelRef;

  return (
    <View style={styles.container}>
      <Animatable.View ref={(ref) => (wheelRef = ref)} style={styles.wheel}>
        <View style={styles.circle}>
          <CircleDivider />
        </View>
      </Animatable.View>
      <TouchableOpacity
        style={styles.button}
        onPress={spinWheel}
        disabled={isSpinning}
      >
        <Text style={styles.spinText}>SPIN</Text>
      </TouchableOpacity>
      <Text style={styles.resultText}>{result}</Text>
      <View id="arrow" style={styles.arrow}></View>
    </View>
  );
};

export default App;
