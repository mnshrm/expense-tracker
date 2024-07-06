import { useEffect, useState } from "react";
import "./App.module.css";
import TransactionForm from "./Components/TransactionForm";
import Transactions from "./Components/Transactions";
import { getTransactions } from "./services/transactionsService";
import { apiGetTransactionResponseType } from "./types/transactionTypes";
import INR from "./utils/currency.ts";

const App = () => {
  console.log("In App");
  const [transactions, setTransactions] =
    useState<apiGetTransactionResponseType>({
      status: "true",
      finalAmount: "0",
      transactions: [],
    });
  const [submit, setSubmit] = useState<boolean>(false);
  useEffect(() => {
    const func = async () => {
      try {
        const t = await getTransactions();
        setTransactions(t);
      } catch {
        console.log("Failed to fetch transactions");
      }
    };
    func();
  }, [submit]);

  const submitHandler = () => {
    setSubmit((pv) => !pv);
  };
  return (
    <main>
      <h1 className="roboto-bold">
        {INR.format(Number(transactions.finalAmount))}
      </h1>
      <TransactionForm onSubmit={submitHandler} />
      <Transactions transactions={transactions.transactions} />
    </main>
  );
};

export default App;
