import { TransactionType } from "../types/transactionTypes";
const url = "http://13.232.73.221:3000/api/transaction";

export const addTransaction: (t: TransactionType) => void = async (t) => {
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(t),
  });
};
