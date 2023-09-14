import { ConnectMongoDB } from "@/app/libs/MongoDB";
import Listings from "@/app/models/listSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, body } = await request.json();
  await ConnectMongoDB();
  await Listings.create({ title, body });
  return NextResponse.json({ message: "Task Added" });
}
