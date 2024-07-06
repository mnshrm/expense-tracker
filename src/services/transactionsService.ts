import { apiGetTransactionResponseType } from "../types/transactionTypes";

const url = "http://localhost:3000/api/transactions";

export const getTransactions: () => Promise<apiGetTransactionResponseType> =
  async () => {
    const response = await fetch(url);
    const t: apiGetTransactionResponseType = await response.json();
    return t;
  };
