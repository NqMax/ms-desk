// Components
import { SectionTitle } from "@/components/user/sectionTitle";
import { TicketCreationForm } from "@/components/tickets/ticketCreationForm";

export default function CreateTicket() {
  return (
    <>
      <SectionTitle
        title="Create Ticket"
        description="Create and Report a New Ticket"
      />
      <TicketCreationForm />
    </>
  );
}
