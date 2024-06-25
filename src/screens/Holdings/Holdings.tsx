import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import ScripCard from '../../containers/ScripCard/ScripCard';
import PortfolioSummary from '../../containers/PortfolioSummary';
import {styles} from './styles'

interface Holding {
  symbol: string;
  ltp: number;
  quantity: number;
  avgPrice: number;
  close: number;
}

interface Summary {
  currentValue: number;
  totalInvestment: number;
  overallProfitLoss: number;
  todayProfitLoss: number;
}

const Holdings: React.FC = () => {
  const [holdings, setHoldings] = useState<Holding[]>([]);
  const [summary, setSummary] = useState<Summary>({
    currentValue: 0,
    totalInvestment: 0,
    overallProfitLoss: 0,
    todayProfitLoss: 0,
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://35dee773a9ec441e9f38d5fc249406ce.api.mockbin.io/');
      const result = await response.json();
      const data: Holding[] = result.data.userHolding;
      setHoldings(data);
      calculateSummary(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const calculateSummary = useCallback((data: Holding[]) => {
    let currentValue = 0;
    let totalInvestment = 0;
    let overallProfitLoss = 0;
    let todayProfitLoss = 0;

    data.forEach((item) => {
      const itemCurrentValue = item.ltp * item.quantity;
      const itemTotalInvestment = item.avgPrice * item.quantity;
      currentValue += itemCurrentValue;
      totalInvestment += itemTotalInvestment;
      overallProfitLoss += (item.ltp - item.avgPrice) * item.quantity;
      todayProfitLoss += (item.ltp - item.close) * item.quantity;
    });

    setSummary({
      currentValue,
      totalInvestment,
      overallProfitLoss,
      todayProfitLoss,
    });
  }, []);

  const renderItem = useCallback(({ item }: { item: Holding }) => (
    <ScripCard symbol={item.symbol} ltp={item.ltp} quantity={item.quantity} avgPrice={item.avgPrice} />
  ), []);

  const keyExtractor = useCallback((item: Holding) => item.symbol, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#6200EE" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Upstox Holding</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={holdings}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.list}
          initialNumToRender={10}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.summaryContainer}>
        <PortfolioSummary summary={summary} />
      </View>
    </View>
  );
};

export default Holdings;
