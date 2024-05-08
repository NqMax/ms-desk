"use server";
import { MongoClient, ObjectId } from "mongodb";
import { redirect } from "next/navigation";
import { format } from "date-fns";
import { revalidatePath } from "next/cache";

const client = new MongoClient(process.env.MONGO_URI!);
const db = client.db("ms-desk");

export async function createTicket(prevState: any, formData: FormData) {
  try {
    const rawFormData = Object.fromEntries(formData.entries());

    const ticketsColl = db.collection("tickets");

    const ticket = {
      subject: rawFormData.subject,
      priority: rawFormData.priority,
      description: rawFormData.description,
      createdAt: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
      closedAt: "",
      status: "open",
      conversation: [
        {
          userName: "User",
          message: "",
          createdAt: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
          statusMessage: "Created ticket",
          role: "user",
        },
      ],
    };

    await ticketsColl.insertOne(ticket);
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return {
        error: "An error occurred while creating the ticket: " + error.message,
      };
    }
  }

  revalidatePath("/", "layout");
  redirect(`/user/tickets`);
}

export async function commentTicket(prevState: any, formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries());
  try {
    const ticketsColl = db.collection("tickets");

    const commentary = {
      userName: rawFormData.role === "user" ? "User" : "Admin",
      message: rawFormData.message,
      createdAt: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
      statusMessage: "",
      role: rawFormData.role,
    };

    await ticketsColl.updateOne(
      { _id: new ObjectId(rawFormData._id as string) },
      {
        // @ts-ignore
        $push: { conversation: commentary },
      }
    );
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return {
        error:
          "An error occurred while commenting on the ticket: " + error.message,
      };
    }
  }

  revalidatePath("/", "layout");
  rawFormData.role === "user"
    ? redirect("/user/tickets")
    : redirect("/administration/tickets");
}

export async function updateStatus(prevState: any, formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries());
  try {
    const ticketsColl = db.collection("tickets");

    const resolution = {
      userName: rawFormData.role === "user" ? "User" : "Admin",
      message: rawFormData.message,
      createdAt: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
      statusMessage: rawFormData.statusMessage,
      role: rawFormData.role,
    };

    await ticketsColl.updateOne(
      { _id: new ObjectId(rawFormData._id as string) },
      {
        // @ts-ignore
        $push: { conversation: resolution },
        $set: {
          status: rawFormData.status,
          closedAt:
            rawFormData.status === "closed"
              ? format(new Date(), "MM/dd/yyyy HH:mm:ss")
              : "",
        },
      }
    );
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return {
        error: "An error occurred while updating the status: " + error.message,
      };
    }
  }

  revalidatePath("/", "layout");
  rawFormData.role === "user"
    ? redirect("/user/tickets")
    : redirect("/administration/tickets");
}
