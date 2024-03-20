"use client";
import { usePathname } from "next/navigation";
// Components
import { Button } from "@/components/ui/button";
import { NavButton } from "@/components/user/navButton";
// Icons
import {
  LayoutDashboard,
  LogOut,
  Table2,
} from "lucide-react";

const routes = [
  {
    value: "dashboard",
    label: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="w-4 h-4 mr-3 shrink-0" />,
  },
  {
    value: "tickets",
    label: "Tickets",
    href: "/tickets",
    icon: <Table2 className="w-4 h-4 mr-3 shrink-0" />,
  },
];

export function NavBar() {
  const currentPath = usePathname();
  return (
    <nav className="flex flex-col py-8 pr-8 border-r gap-y-3 shrink-0 overflow-y-auto">
      {routes.map((route) => (
        <NavButton
          variant={currentPath.includes(route.value) ? "default" : "secondary"}
          key={route.value}
          href={route.href}
          icon={route.icon}
        >
          {route.label}
        </NavButton>
      ))}
      <Button className="justify-normal">
        <LogOut className="w-4 h-4 mr-3 shrink-0" />
        Log Out
      </Button>
    </nav>
  );
}
