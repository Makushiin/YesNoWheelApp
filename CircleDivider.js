import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Path, Text as SvgText } from 'react-native-svg';

const CircleDivider = () => {
  const radius = 170; // Adjust the radius as needed
  const arcAngle = (2 * Math.PI) / 8; // Divide the circle into 8 parts

  const colors = ['#ffa6a4', '#fed5cc', '#b7e3ee', '#ffe7d9'];
  const texts = ['NO', 'YES', 'NO', 'YES', 'NO', 'YES', 'NO', 'YES']; // Alternating text values

  return (
    <View style={styles.container}>
      <Svg width={radius * 2} height={radius * 2}>
        <Circle cx={radius} cy={radius} r={radius} fill="transparent" />
        {Array.from({ length: 8 }).map((_, index) => {
          const startAngle = index * arcAngle;
          const endAngle = (index + 1) * arcAngle;

          const startX = radius + Math.sin(startAngle) * radius;
          const startY = radius - Math.cos(startAngle) * radius;
          const endX = radius + Math.sin(endAngle) * radius;
          const endY = radius - Math.cos(endAngle) * radius;

          const largeArcFlag = endAngle - startAngle <= Math.PI ? 0 : 1;

          const path = `M${radius},${radius} L${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY} Z`;

          return (
            <Path
              key={index}
              d={path}
              fill={colors[index % colors.length]} // Cycle through colors for each segment
            />
          );
        })}
        {Array.from({ length: 8 }).map((_, index) => {
          const textAngle = (index * arcAngle) + (arcAngle / 2); // Midpoint angle of each segment
          const textX = radius + Math.sin(textAngle) * (radius - 50); // Adjust the offset as needed
          const textY = radius - Math.cos(textAngle) * (radius - 50); // Adjust the offset as needed

          const rotation = (index * arcAngle * 180) / Math.PI + 20; // Adjust the offset (20 degrees) as needed

          return (
            <SvgText
              key={index}
              x={textX}
              y={textY}
              textAnchor="middle"
              fill='black'
              fontSize={16}
              fontFamily="Georgia" // Set the fontFamily to "Georgia"
              transform={`rotate(${rotation}, ${textX}, ${textY})`} // Apply rotation to the text
            >
              {texts[index % texts.length]}
            </SvgText>
          );
        })}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CircleDivider;
