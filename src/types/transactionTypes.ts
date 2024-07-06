export type TransactionType = {
  name: string;
  description: string;
  amount: string;
  datetime: string;
};

export type apiGetTransactionResponseType = {
  status: string;
  finalAmount: string;
  transactions: [TransactionType] | [];
};
