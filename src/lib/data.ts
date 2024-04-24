// import { MongoClient } from "mongodb";

// const uri =
//   "mongodb+srv://admin:9HFrspr6uJW56bb1@marriot-db.0ha5ya6.mongodb.net/?retryWrites=true&w=majority&appName=marriot-db";

// const client = new MongoClient(uri);

// export async function getAdminDocs() {
//   try {
//     const database = client.db("ms-desk");
//     const adminDocs = database.collection("admin-docs");

//     const result = await adminDocs.find().toArray();
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// }
