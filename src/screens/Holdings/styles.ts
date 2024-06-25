import { StyleSheet, ViewStyle, TextStyle } from "react-native";

interface Styles {
  container: ViewStyle;
  header: ViewStyle;
  headerText: TextStyle;
  content: ViewStyle;
  list: ViewStyle;
  summaryContainer: ViewStyle;
  loader: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#4b0161",
    padding: 15,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  list: {
    flexGrow: 1,
    paddingBottom: 120,
  },
  summaryContainer: {
    borderTopWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f8f8f8",
    padding: 15,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
