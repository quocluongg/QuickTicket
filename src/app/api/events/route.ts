// app/api/events/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  const formData = await req.formData();

  const newEvent = {
    id: Date.now(),
    name: formData.get("name"),
    description: formData.get("description"),
    image: formData.get("eventImage"),
    date: formData.get("date"),
    location: formData.get("location"),
    ticketTypes: JSON.parse(formData.get("ticketTypes") as string || "[]"),
    seatRows: Number(formData.get("seatRows") || 0),
    seatColumns: Number(formData.get("seatColumns") || 0),
  };

  const filePath = path.join(process.cwd(), 'public', 'db.json');
  let events = [];

  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    events = JSON.parse(data);
  } catch (err) {
    console.error("Không đọc được db.json:", err);
  }

  events.push(newEvent);

  try {
    fs.writeFileSync(filePath, JSON.stringify(events, null, 2), 'utf-8');
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Lỗi ghi file" }, { status: 500 });
  }
}
