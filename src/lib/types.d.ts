declare global {
  interface Ticket {
    _id: string;
    subject: string;
    description: string;
    priority: "low" | "medium" | "high" | "critical";
    status: "open" | "closed" | "in-progress" | "declined" | "awaiting-response";
    createdAt: string;
    closedAt: string;
    conversation: {
      userName: string;
      message: string;
      createdAt: string;
      statusMessage: string;
      role: "user" | "admin";
    }[];
  }
}

export {};
