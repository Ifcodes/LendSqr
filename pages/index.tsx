import Head from "next/head";
import Image from "next/image";
import PageHead from "../components/Atoms/PageHead";
import styles from "../styles/Home.module.scss";
import Login from "./login";

export default function Home() {
  return (
    <div className={styles.container}>
      <PageHead title="Welcome" />
      <Login />
    </div>
  );
}
