import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface LtpProps {
  ltp: number;
  pl: number;
}

const Ltp: React.FC<LtpProps> = ({ ltp, pl }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.ltp}>LTP: ₹ {ltp.toFixed(2)}</Text>
      <View style={styles.pnl}>
        <Text style={styles.pl}>P/L: </Text>
        <Text style={[styles.pl, { color: pl >= 0 ? 'green' : 'red' }]}>
          {pl.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default Ltp;
