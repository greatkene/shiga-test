import { StyleSheet, Image, View } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "@screens/ScreenWrapper";
import { AppHeader, AppText, ScrollContainer, SearchInput } from "@atoms";
import { Transaction } from "@types";
import { transactionData } from "@constants/data";
import { Swipeable } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { Sizes } from "@theme";

const groupTransactionsByDate = (transactions: Transaction[]) => {
  return transactions.reduce((groups, transaction) => {
    const date = transaction.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(transaction);
    return groups;
  }, {} as Record<string, Transaction[]>);
};

export const Transactions: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredTransactions = transactionData.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedTransactions = groupTransactionsByDate(filteredTransactions);

  const renderRightActions = () => (
    <View style={styles.eyeIconContainer}>
      <MaterialIcons name="visibility" size={24} color="#FFF" />
    </View>
  );

  return (
    <ScreenWrapper>
      <AppHeader
        title="Transactions"
        icon={<Image source={require("@assets/icons/calendar.png")} />}
      />
      <SearchInput
        placeholder="Search transactions"
        onChangeText={(text: string) => setSearchQuery(text)}
      />
      <ScrollContainer>
        {Object.keys(groupedTransactions).map((date) => (
          <View key={date} style={styles.dateGroup}>
            <AppText fontBold style={styles.dateHeader}>
              {date}
            </AppText>
            {groupedTransactions[date].map((transaction) => (
              <Swipeable
                key={transaction.id}
                renderRightActions={renderRightActions}
              >
                <View style={styles.transactionItem}>
                  <AppText style={styles.transactionDescription}>
                    {transaction.description}
                  </AppText>
                  <AppText>{transaction.amount}</AppText>
                </View>
              </Swipeable>
            ))}
          </View>
        ))}
      </ScrollContainer>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  dateGroup: {
    marginVertical: Sizes.font12,
    marginHorizontal: Sizes.font12,
  },
  dateHeader: {
    marginBottom: Sizes.font8,
  },
  transactionItem: {
    backgroundColor: "#1C1C1E",
    padding: Sizes.font16,
    borderRadius: Sizes.borderRadius,
    marginVertical: Sizes.font8,
  },
  transactionDescription: {
    marginBottom: Sizes.font4,
  },

  eyeIconContainer: {
    backgroundColor: "#1C1C1E",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    borderRadius: Sizes.borderRadius,
    marginVertical: Sizes.font8,
  },
});
