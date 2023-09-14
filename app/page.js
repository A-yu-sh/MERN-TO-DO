"use client";
import { useEffect, useState } from "react";
import Form from "./Components/Form";

export default function Home() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/GetData");
    const DBdata = await res.json();
    setData(DBdata);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  return (
    <main>
      <h1 className="flex justify-center text-2xl mt-5">
        This is a MERN TO DO APP
      </h1>
      <Form />
      {data.map((e) => {
        return <div>{e.data.email}</div>;
      })}
    </main>
  );
}
