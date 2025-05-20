import { Text, TextStyle, StyleProp } from "react-native";
import React, { useEffect, useState } from "react";
import Animated from "react-native-reanimated";

interface TypewriterTextProps {
  text: string;
  duration?: number;
  style?: StyleProp<TextStyle>;
}
const AnimatedText = Animated.createAnimatedComponent(Text);

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  duration = 200,
  style,
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      currentIndex++;
      setDisplayedText(text.slice(0, currentIndex));
      if (currentIndex >= text.length) {
        clearInterval(interval);
      }
    }, duration / text.length);

    return () => clearInterval(interval);
  }, [text, duration]);

  return <AnimatedText style={style}>{displayedText}</AnimatedText>;
};
export default TypewriterText;
