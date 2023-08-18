import Link from "next/link";

export default function Home() {
  return (
    <>
      Hello from Rana Rabees
      <br />
      <Link href="/name">Go to Name page</Link>
      <br />
      <Link href="/name/address">Go to Address page</Link>
      <br />
      <Link href="/rabees">Go to Rana Rabees page</Link>
      <br />
      <Link href="/reebaal">Go to Rana Reebaal page</Link>
      <br />
      <Link href="/adeema">Go to Adeema Amir page</Link>
      <br />
      <Link href="/items">Go to Cart page</Link>
      <br />
    </>
  )
}