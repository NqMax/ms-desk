import { Button } from "@/components/ui/button";
import { CircleUserRound } from 'lucide-react';
import Link from "next/link";

export function SignInButton() {
  return (
    <Button asChild className="gap-x-3">
      <Link href="/dashboard">
        <span>Join </span>
        <span className="text-xs">|</span>
        <span>Sign In</span>
        <CircleUserRound size={24} />
      </Link>
    </Button>
  );
}
