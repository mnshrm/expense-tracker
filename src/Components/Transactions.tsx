import { TransactionType } from "../types/transactionTypes";
import styles from "./Transactions.module.css";
import INR from "../utils/currency";

const Transactions: React.FunctionComponent<{
  transactions: [TransactionType] | [];
}> = ({ transactions }) => {
  console.log("in Transactions");
  return (
    <>
      {transactions.map((t) => (
        <div className={styles.transactions}>
          <div className={styles.transaction}>
            <div className={styles.left}>
              <div className={styles.name}>{t!.name}</div>
              <div className={styles.description}>{t!.description}</div>
            </div>
            <div className={styles.right}>
              <div
                className={`${styles.price}  ${
                  t!.amount.includes("+") ? styles.green : styles.red
                }`}
              >
                {INR.format(Number(t!.amount))}
              </div>
              <div className={styles.datetime}>
                {new Date(t!.datetime).toDateString()}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Transactions;
