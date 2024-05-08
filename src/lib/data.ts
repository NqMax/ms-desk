import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI!);
const db = client.db("ms-desk");

export async function getTickets() {
  try {
    const ticketsColl = db.collection<Ticket>("tickets");

    const result = ticketsColl.find();

    const tickets = [];
    for await (const ticket of result) {
      tickets.push({ ...ticket, _id: ticket._id.toString() });
    }

    return tickets;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to retrieve tickets");
  }
}
