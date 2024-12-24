import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2c3e50",
  },
  formContainer: {
    marginVertical: 20,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  summaryContainer: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
  },
  summaryText: {
    fontSize: 18,
    color: "#2c3e50",
  },
  transactionListContainer: {
    marginTop: 20,
  },
  transactionListTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2c3e50",
  },
  transactionTile: {
    backgroundColor: "#ecf0f1",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
  },
  transactionTileText: {
    fontSize: 16,
    color: "#34495e",
  },
  removeButton: {
    backgroundColor: "#e74c3c",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  removeButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});

export default styles;
