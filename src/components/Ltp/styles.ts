import { StyleSheet, ViewStyle, TextStyle } from "react-native";

interface Styles {
	container: ViewStyle;
	ltp: TextStyle;
	pl: TextStyle;
	pnl: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	container: {
		justifyContent: "space-between",
	},
	ltp: {
		fontSize: 16,
		textAlign: "right",
	},
	pl: {
		fontSize: 16,
	},
	pnl: {
		flexDirection: "row",
		justifyContent: "flex-end",
	},
});

export default styles;
