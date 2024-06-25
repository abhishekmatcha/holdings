import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  footer: ViewStyle;
  details: ViewStyle;
  bold: TextStyle;
  text: TextStyle;
  rowAlign: ViewStyle;
  downChevron: ImageStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 16,
  },
  footer: {
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
  },
  details: {
    overflow: "hidden",
    width: "100%",
  },
  bold: {
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
  rowAlign: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  downChevron: {
    width: 28,
    height: 28,
    tintColor: "#4b0161",
  },
});

export default styles;
