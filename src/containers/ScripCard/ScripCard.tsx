import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Ltp from "../../components/Ltp/Ltp";

interface ScripCardProps {
	symbol: string;
	ltp: number;
	quantity: number;
	avgPrice: number;
}

const ScripCard: React.FC<ScripCardProps> = ({
	symbol,
	ltp,
	quantity,
	avgPrice,
}) => {
	const pl = (ltp - avgPrice) * quantity;
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.symbol}>{symbol}</Text>
				<Text style={styles.quantity}>{quantity}</Text>
			</View>
			<Ltp ltp={ltp} pl={pl} />
		</View>
	);
};

export default ScripCard;
