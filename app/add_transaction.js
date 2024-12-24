import { Button, Text, TextInput, View } from "react-native";
import styles from "./styles";
import { useState } from "react";

// AddTransactionForm - Зарлага оруулах хэсэг
export default function AddTransactionForm({
  setTransactions,
  transactions,
  setAddForm,
}) {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense"); // 'expense' эсвэл 'income'
  const [date, setDate] = useState(new Date().toLocaleString()); // Одоогийн огноо, цаг

  const handleAddTransaction = () => {
    if (!amount || isNaN(amount)) {
      alert("Үргэлжлэх мөнгө оруулна уу.");
      return;
    }

    const newTransaction = {
      id: new Date().getTime(),
      amount: parseInt(amount),
      type,
      date,
    };

    setTransactions([...transactions, newTransaction]);
    setAddForm(false); // Form-ийг хаах
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>Зарлага эсвэл орлого оруулах</Text>
      <TextInput
        style={styles.textInput}
        value={amount}
        keyboardType="numeric"
        placeholder="Мөнгөний хэмжээ"
        onChangeText={setAmount}
      />
      <View style={styles.row}>
        <Button
          title="Зарлага"
          onPress={() => setType("expense")}
          color={type === "expense" ? "green" : "gray"}
        />
        <Button
          title="Орлого"
          onPress={() => setType("income")}
          color={type === "income" ? "blue" : "gray"}
        />
      </View>
      <Button title="Нэмэх" onPress={handleAddTransaction} />
    </View>
  );
}
