import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  Image,
} from "react-native";
import Images from "../../assets";
import styles from './styles';

interface Summary {
  currentValue: number;
  totalInvestment: number;
  overallProfitLoss: number;
  todayProfitLoss: number;
}

interface PortfolioSummaryProps {
  summary: Summary;
}

const PortfolioSummary: React.FC<PortfolioSummaryProps> = ({ summary }) => {
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleExpanded = () => {
    setExpanded(!expanded);
    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const height = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });

  const rotate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={toggleExpanded}
          style={styles.arrowContainer}
        >
          <Animated.View style={[{ transform: [{ rotate }] }]}>
            <Image
              source={Images.chevronDownFilled}
              style={styles.downChevron}
            />
          </Animated.View>
        </TouchableOpacity>
        <Animated.View style={[styles.details, { height }]}>
          <View style={styles.rowAlign}>
            <Text style={[styles.text, styles.bold]}>Current Value:</Text>
            <Text style={styles.text}>
              ₹{summary.currentValue.toFixed(2)}
            </Text>
          </View>
          <View style={styles.rowAlign}>
            <Text style={[styles.text, styles.bold]}>Total Investment:</Text>
            <Text style={styles.text}>
              ₹{summary.totalInvestment.toFixed(2)}
            </Text>
          </View>
          <View style={styles.rowAlign}>
            <Text style={[styles.text, styles.bold]}>Today's Profit &amp; Loss:</Text>
            <Text style={styles.text}>
              ₹{summary.todayProfitLoss.toFixed(2)}
            </Text>
          </View>
        </Animated.View>
        <View style={styles.rowAlign}>
          <Text style={[styles.text, styles.bold]}>Profit &amp; Loss:</Text>
          <Text style={styles.text}>
            ₹{summary.overallProfitLoss.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PortfolioSummary;
