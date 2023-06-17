import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { styles } from './styles';
import CircleDivider from './CircleDivider';

const App = () => {
  const [rotateAnimation] = useState(new Animated.Value(0));
  const [result, setResult] = useState('');
  const [isSpinning, setIsSpinning] = useState(false); // Track the spinning status

  const spinWheel = () => {
    if (isSpinning) {
      return; // Ignore if spinning is already in progress
    }

    // Reset the result text and rotation animation
    setResult('');
    rotateAnimation.setValue(0);

    // Update the spinning status to prevent multiple spins
    setIsSpinning(true);

    // Perform the spinning animation
    const minDegrees = 1800;
    const maxDegrees = 3600;
    const randomDegrees = Math.floor(Math.random() * (maxDegrees - minDegrees + 1)) + minDegrees;

    Animated.timing(rotateAnimation, {
      toValue: randomDegrees / 360,
      duration: 3000,
      useNativeDriver: true, // Set useNativeDriver to true
    }).start(() => {
      // Calculate the selected option based on the final rotation value
      const rotationValue = rotateAnimation._value % 1; // Get the decimal part of the rotation value
      const segmentCount = 8; // Number of segments in the wheel
      const topSegmentIndex = Math.floor(rotationValue * segmentCount);

      // Find the corresponding text for the top segment
      const texts = ['YES', 'NO']; // Alternating text values
      const topSegmentText = texts[topSegmentIndex % texts.length];

      // Update the result text with the top segment text
      setResult(topSegmentText);

      // Update the spinning status to allow spinning again
      setIsSpinning(false);
    });
  };

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.wheel, animatedStyle]}>
        <View style={styles.circle}>
          <CircleDivider />
        </View>
      </Animated.View>
      <TouchableOpacity style={styles.button} onPress={spinWheel} disabled={isSpinning}>
        <Text style={styles.spinText}>SPIN</Text>
      </TouchableOpacity>
      <Text style={styles.resultText}>{result}</Text>
      <View id="arrow" style={styles.arrow}></View>
    </View>
  );
};

export default App;
