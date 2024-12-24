import { View, Text } from "react-native";
import styles from "./styles";

// FinancialSummary - Орлого, Зарлагын тойм
export default function FinancialSummary({ transactions }) {
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, transaction) => sum + transaction.amount, 0);
  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, transaction) => sum + transaction.amount, 0);
  const balance = totalIncome - totalExpense;

  // Тооцоолол хийх (сар, 7 хоног, жил)
  const daysInMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0
  ).getDate();
  const daysInYear = 365;

  const monthlyExpense = (totalExpense / new Date().getDate()) * daysInMonth;
  const yearlyExpense = (totalExpense / new Date().getDate()) * daysInYear;

  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.summaryText}>Нийт Орлого: {totalIncome}₮</Text>
      <Text style={styles.summaryText}>Нийт Зарлага: {totalExpense}₮</Text>
      <Text style={styles.summaryText}>Үлдэгдэл: {balance}₮</Text>
      <Text style={styles.summaryText}>
        Сар тутамд Зарлага: {Math.round(monthlyExpense)}₮
      </Text>
      <Text style={styles.summaryText}>
        Жилийн Зарлага: {Math.round(yearlyExpense)}₮
      </Text>
    </View>
  );
}
