import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, Button, Text, View } from "react-native";
import styles from "./styles";
import AddTransactionForm from "./add_transaction";
import FinancialSummary from "./financial_summary";
import TransactionList from "./transactionList";

export default function App() {
  const [transactions, setTransactions] = useState([]); // Эхний орлого оруулсан
  const [addForm, setAddForm] = useState(false); // Зарлага, орлого нэмэх формын харагдах байдал

  const addTransaction = () => {
    setAddForm(true); // Зарлага эсвэл орлого нэмэх формыг харуулах
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.heading}>Өдөр тутмын Санхүүгийн Тоглогч</Text>

      {addForm ? (
        <AddTransactionForm
          setTransactions={setTransactions}
          transactions={transactions}
          setAddForm={setAddForm}
        />
      ) : (
        <View style={styles.row}>
          <Button
            onPress={addTransaction}
            color="green"
            title="Орлого эсвэл Зарлага нэмэх"
          />
        </View>
      )}

      <FinancialSummary transactions={transactions} />
      <TransactionList
        transactions={transactions}
        setTransactions={setTransactions}
      />
    </SafeAreaView>
  );
}
