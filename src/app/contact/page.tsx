"use client";
import Link from "next/link";
import fs from "fs";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  return (
    <div>
      <h1>Contact</h1>
      <Link href="/">Go home</Link>
      <button
        onClick={() => {
          router.push("/");
        }}
      ></button>
    </div>
  );
}
