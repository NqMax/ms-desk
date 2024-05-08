import Image from "next/image";
// Components
import { SectionTitle } from "@/components/user/sectionTitle";

export default function DashboardHome() {
  const userInfo = [
    { title: "Full Name", value: "Lionel Messi" },
    { title: "Email", value: "leo@gmail.com" },
    { title: "Password", value: "*********" },
    { title: "Age", value: "36" },
    { title: "Country of Origin", value: "Argentina" },
    { title: "Phone Number", value: "(11) 1234-5678" },
  ];

  return (
    <>
      <SectionTitle
        title="Dashboard"
        description="View Your Information and an Overview of Your Tickets"
      />
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-3">
          <div className="font-bold">Profile Information</div>
          <div className="flex flex-col gap-y-2 border rounded-lg p-3">
            <Image
              src="/messi.jpg"
              alt="User Profile"
              width={72}
              height={72}
              className="rounded-full w-[4.5rem] h-[4.5rem] self-center object-cover animate-spin"
            />
            {userInfo.map((user, index) => (
              <UserInfo key={index} title={user.title} value={user.value} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          {/* <div className="font-bold">Tickets Overview</div>
          <div className="flex flex-col gap-y-2 rounded-lg p-3 border">
            <div className="text-sm font-medium">No tickets to display</div>
          </div> */}
        </div>
      </div>
    </>
  );
}

function UserInfo({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex flex-col gap-y-1 text-sm border-b pb-2 last:border-b-0 last:pb-0">
      <div className="font-medium">{title}</div>
      <div className="text-muted-foreground">{value}</div>
    </div>
  );
}
