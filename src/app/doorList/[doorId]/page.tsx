"use client";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./page.module.css";

export default function DetailPage(id: number) {
  const detail = useSelector((state: any) => state.door);

  console.log(detail);
  return <div className="details">Details</div>;
}
