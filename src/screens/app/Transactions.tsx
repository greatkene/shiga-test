import { StyleSheet, Image, View } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "@screens/ScreenWrapper";
import { AppHeader, AppText, ScrollContainer, SearchInput } from "@atoms";
import { Transaction } from "@types";
import { transactionData } from "@constants/data";
import { Swipeable } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors, RPW, Sizes, verticalScale } from "@theme";
import { bankIcons } from "@constants/bankIcon";

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

const getTransactionIcon = (transaction: Transaction) => {
  if (transaction.status === "failed") {
    return (
      <MaterialIcons name="error" size={Sizes.font22} color={Colors.red} />
    );
  }
  if (transaction.type === "received") {
    return (
      <MaterialIcons
        name="arrow-downward"
        size={Sizes.font22}
        color={Colors.success}
      />
    );
  }
  if (transaction.type === "sent") {
    return (
      <MaterialIcons
        name="arrow-upward"
        size={Sizes.font22}
        color={Colors.primary}
      />
    );
  }
  if (transaction.bank && bankIcons[transaction.bank]) {
    return (
      <Image source={bankIcons[transaction.bank]} style={styles.bankIcon} />
    );
  }
  return (
    <MaterialIcons
      name="account-balance-wallet"
      size={Sizes.font22}
      color={Colors.secondary}
    />
  );
};

export const Transactions: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredTransactions = transactionData.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedTransactions = groupTransactionsByDate(filteredTransactions);

  const renderRightActions = () => (
    <View style={styles.rightIcon}>
      <MaterialIcons name="visibility" size={Sizes.font26} color="#FFF" />
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
                  <View style={styles.transactionIcon}>
                    {getTransactionIcon(transaction)}
                  </View>
                  <View style={styles.transactionDetails}>
                    <AppText style={styles.transactionDescription}>
                      {transaction.description}
                    </AppText>
                    <AppText>{transaction.amount}</AppText>
                  </View>
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
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.shigaBG,
    borderTopRightRadius: Sizes.font16,
    borderBottomRightRadius: Sizes.font16,
    width: RPW(93),
    height: verticalScale(50),
  },
  transactionIcon: {
    marginRight: Sizes.font12,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionDescription: {
    marginBottom: Sizes.font4,
  },
  rightIcon: {
    backgroundColor: "#757484",
    alignItems: "center",
    justifyContent: "center",
    width: RPW(20),
    height: verticalScale(50),
    borderTopRightRadius: Sizes.font16,
    borderBottomRightRadius: Sizes.font16,
  },
  bankIcon: {
    width: Sizes.font22,
    height: Sizes.font22,
    resizeMode: "contain",
  },
});
