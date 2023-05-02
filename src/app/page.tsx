import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  let name = "park";
  return (
    <div>
      <h1 className="title">애플후레시</h1>
      <p className="title-sub">by dev {name}</p>
    </div>
  );
}
