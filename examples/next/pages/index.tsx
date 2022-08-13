import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import * as robotevents from "robotevents";

function getEvents() {
  return robotevents.events.search({
    level: ["Signature"],
    season: [robotevents.seasons.current("VRC")!],
  });
}

const Home: NextPage = () => {
  const [events, setEvents] = useState<robotevents.events.Event[]>([]);

  useEffect(() => {
    getEvents().then(setEvents);
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>
    </div>
  );
};

export default Home;
