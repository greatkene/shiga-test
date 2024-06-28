import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "@screens/ScreenWrapper";
import { AppHeader, AppText, ScrollContainer, SearchInput } from "@atoms";
import { Transaction } from "@types";
import { transactionData } from "@constants/data";
import { Swipeable } from "react-native-gesture-handler";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Colors, RPW, Sizes, normalize, verticalScale } from "@theme";
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
      <View
        style={[styles.statusIconContainer, { backgroundColor: "#2F1D1C" }]}
      >
        <AntDesign name="warning" size={Sizes.font22} color={Colors.red} />
      </View>
    );
  }
  if (transaction.type === "received") {
    return (
      <View
        style={[
          styles.statusIconContainer,
          { backgroundColor: Colors.success },
        ]}
      >
        <MaterialIcons
          name="arrow-downward"
          size={Sizes.font22}
          color={Colors.white}
        />
      </View>
    );
  }
  if (transaction.type === "sent") {
    return (
      <View
        style={[
          styles.statusIconContainer,
          { backgroundColor: Colors.success },
        ]}
      >
        <MaterialIcons
          name="arrow-upward"
          size={Sizes.font22}
          color={Colors.primary}
        />
      </View>
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
  const [isVisibile, setIsVisible] = useState(false);

  const filteredTransactions = transactionData.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedTransactions = groupTransactionsByDate(filteredTransactions);

  const toggleVisible = () => {
    setIsVisible(!isVisibile);
  };

  const renderRightActions = () => (
    <TouchableOpacity onPress={toggleVisible} style={styles.rightIcon}>
      {isVisibile ? (
        <MaterialIcons name="visibility" size={Sizes.font26} color="#FFF" />
      ) : (
        <Image source={require("@assets/image/eye-lash.png")} />
      )}
    </TouchableOpacity>
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
                    <View>
                      <AppText gray style={styles.transactionDescription}>
                        {transaction.description}
                      </AppText>
                      <AppText style={styles.transactionDescription}>
                        {transaction.source}
                      </AppText>
                    </View>
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
    width: RPW(85),
    height: verticalScale(50),
  },
  transactionIcon: {
    marginRight: Sizes.font12,
  },
  transactionDetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    width: normalize(35),
    height: normalize(35),
    resizeMode: "contain",
  },
  statusIconContainer: {
    width: normalize(35),
    height: normalize(35),
    borderRadius: Sizes.font30 * 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
});
