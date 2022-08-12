// import Head from "next/head"
// import Image from "next/image"
// import styles from "../styles/Home.module.css"
import "tailwindcss/tailwind.css"
import { Body } from "../components/Body"
import { Header } from "../components/Header"

export default function Home() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}
