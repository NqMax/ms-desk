// Data
import { getTickets } from "@/lib/data";
// Components
import { SectionTitle } from "@/components/user/sectionTitle";
import { TicketCard } from "@/components/tickets/ticketCard";

export default async function UserTickets() {
  const tickets = await getTickets();

  return (
    <>
      <SectionTitle
        title="My Tickets"
        description="View and Manage Your Tickets"
      />
      {tickets.length === 0 && (
        <div className="text-center text-lg font-bold">
          You have no tickets.
        </div>
      )}
      <div className="flex flex-col gap-y-4 pb-4">
        {tickets.map((ticket) => (
          <TicketCard key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </>
  );
}
