import { FormEvent, useState } from "react";
import styles from "./TransactionForm.module.css";
import { addTransaction } from "../services/transactionServices";

const TransactionForm: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  const [name, setName] = useState<string>("");
  const [datetime, setDatetime] = useState<string>("");
  const [description, setDesc] = useState<string>("");
  const [amount, setAmt] = useState<string>("");

  const formSubmitHandler: (e: FormEvent<HTMLFormElement>) => void = async (
    ev
  ) => {
    ev.preventDefault();
    setName("");
    setDatetime("");
    setDesc("");
    setAmt("");
    await addTransaction({ name, datetime, description, amount });
    onSubmit();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <input
        type="string"
        placeholder="Enter amount in INR, '+' for credit and '-' for debit"
        value={amount}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAmt(e.target.value)
        }
      />
      <div className={styles.basic}>
        <input
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          type="text"
          placeholder="Expense title"
        />
        <input
          type="date"
          value={datetime}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDatetime(e.target.value)
          }
        />
      </div>
      <div className={styles.description}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDesc(e.target.value)
          }
        />
      </div>
      <button type="submit">Add new transaction</button>
    </form>
  );
};

export default TransactionForm;
