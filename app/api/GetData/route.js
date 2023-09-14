import { ConnectMongoDB } from "@/app/libs/MongoDB";
import Listings from "@/app/models/listSchema";
import { NextResponse } from "next/server";

export async function GET() {
  await ConnectMongoDB();
  const data = await Listings.find();
  return NextResponse.json({ data });
}
