import Link from "next/link";
import Image from "next/image";
// Components
import { HeaderNav } from "@/components/home/headerNav";
import { SignInButton } from "@/components/home/signInButton";

export function Header() {
  return (
    <header className="border-b">
      <div className="container py-2 flex justify-between items-center ">
        <Link href="/" className="flex items-center gap-x-3 h-[60px]">
          <Image
            src={`/logo.png`}
            alt="Microsoft Desk Logo"
            width="30"
            height="30"
            priority
          />
          <div className="text-xl font-bold">Microsoft Desk</div>
        </Link>
        <HeaderNav />
        <SignInButton />
      </div>
    </header>
  );
}
