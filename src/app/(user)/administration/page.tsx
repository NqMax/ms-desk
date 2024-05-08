import Link from "next/link";
// Components
import { SectionTitle } from "@/components/user/sectionTitle";

export default function Administration() {
  const administrationLinks = [
    {
      name: "Tickets",
      description: "Visualize and Manage User Tickets",
      href: "/administration/tickets",
    },
  ];

  return (
    <>
      <SectionTitle
        title="Administration"
        description="Access Administration Features"
      />
      <div className="grid grid-cols-2 gap-x-5 gap-y-5">
        {administrationLinks.map((link) => (
          <AdministrationLink key={link.name} {...link} />
        ))}
      </div>
    </>
  );
}

function AdministrationLink({
  name,
  description,
  href,
}: {
  name: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col bg-secondary p-3 rounded-lg hover:bg-secondary/80 transition-colors"
    >
      <div className="font-bold">{name}</div>
      <div className="text-sm">{description}</div>
    </Link>
  );
}
