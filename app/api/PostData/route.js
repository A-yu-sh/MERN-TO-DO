import { ConnectMongoDB } from "@/app/libs/MongoDB";
import Listings from "@/app/models/listSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();
  await ConnectMongoDB();
  await Listings.create({ email, password });
  return NextResponse.json({ message: "Task Added" });
}
