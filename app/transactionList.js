import { View, Text, Button, TouchableOpacity } from "react-native";
import styles from "./styles";

// TransactionList - Орлого, Зарлагын жагсаалт (To-Do List хэлбэрээр)
export default function TransactionList({ transactions, setTransactions }) {
  const removeTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <View style={styles.transactionListContainer}>
      <Text style={styles.transactionListTitle}>Түүх</Text>
      {transactions.map((transaction) => (
        <View key={transaction.id} style={styles.transactionTile}>
          <Text style={styles.transactionTileText}>
            {transaction.type === "income" ? "Орлого" : "Зарлага"}:{" "}
            {transaction.amount}₮
          </Text>
          <Text style={styles.transactionTileText}>{transaction.date}</Text>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => removeTransaction(transaction.id)}
          >
            <Text style={styles.removeButtonText}>Устгах</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
