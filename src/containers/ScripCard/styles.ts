import { StyleSheet, ViewStyle, TextStyle } from "react-native";

interface Styles {
	container: ViewStyle;
	symbol: TextStyle;
	quantity: TextStyle;
}

const styles = StyleSheet.create<Styles>({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
	},
	symbol: {
		fontSize: 16,
		fontWeight: "bold",
	},
	quantity: {
		fontSize: 16,
	},
});

export default styles;
