import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useBasket } from "../Contexts/basket-context";
import HitList from "../Components/hitList/index";
import { itemType } from "../types";

export default function Cart() {
  const { basket } = useBasket();
  const totalPrice = () =>
    basket.reduce((acc: number, val: itemType): number => {
      return acc + val.salePrice;
    }, 0);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Panier</h1>
        <h3>{totalPrice()}</h3>

        <HitList hits={basket} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
