import Image from "next/image";
import Link from "next/link";
// UI Components
import { Button } from "@/components/ui/button";
// Icons
import { TicketCheck } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="flex relative h-[calc(100vh-4.813rem)]">
        <Image
          src="/earth.jpg"
          alt="Decorative Background"
          quality={100}
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="flex container items-center justify-center">
          <div className="flex flex-col gap-y-3 bg-background rounded-lg border p-4">
            <h1 className="flex text-lg font-bold items-center">
              Welcome to Microsoft Desk{" "}
              <TicketCheck className="h-6 w-6 ml-3 shrink-0" />
            </h1>
            <p>
              Get the help you need quickly and easily with our intuitive
              ticketing system. Submit tickets, track their progress, and
              communicate directly with our team, all in one place.
            </p>
            <div className="grid grid-cols-3 gap-x-5 mt-3 mb-5">
              <div className="flex flex-col gap-y-2">
                <div className="font-bold">Submit Tickets</div>
                <Image
                  src="/h-1.png"
                  alt="Icon 1"
                  width={3084}
                  height={1926}
                  quality={100}
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="font-bold">Get Instant Support</div>
                <Image
                  src="/h-1.png"
                  alt="Icon 1"
                  width={3084}
                  height={1926}
                  quality={100}
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="font-bold">Track Progress</div>
                <Image
                  src="/h-1.png"
                  alt="Icon 1"
                  width={3084}
                  height={1926}
                  quality={100}
                />
              </div>
            </div>
            <Button asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}
