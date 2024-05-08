// Data
import { getTickets } from "@/lib/data";
// Components
import { SectionTitle } from "@/components/user/sectionTitle";
import { TicketAdministrationCard } from "@/components/tickets/ticketAdministrationCard";

export default async function TicketsAdministration() {
  const tickets = await getTickets();

  return (
    <>
      <SectionTitle
        title="My Tickets"
        description="View and Manage Your Tickets"
      />
      {tickets.length === 0 && (
        <div className="text-center text-lg font-bold">
          There are no tickets available.
        </div>
      )}
      <div className="flex flex-col gap-y-4 pb-4">
        {tickets.map((ticket) => (
          <TicketAdministrationCard key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </>
  );
}
