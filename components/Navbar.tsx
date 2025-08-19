import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <NavigationMenu className="sticky top-0 z-50 bg-white shadow-md p-4">
      <NavigationMenuList className="flex gap-4">
        <NavigationMenuItem>
          <Link
            href="/"
            className={cn(
              "text-lg font-medium hover:text-blue-500",
              "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 p-2 rounded-sm transition-all outline-none"
            )}
            data-radix-collection-item=""
          >
            Home
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="/services"
            className={cn(
              "text-lg font-medium hover:text-blue-500",
              "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 p-2 rounded-sm transition-all outline-none"
            )}
            data-radix-collection-item=""
          >
            Services
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="/portfolio"
            className={cn(
              "text-lg font-medium hover:text-blue-500",
              "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 p-2 rounded-sm transition-all outline-none"
            )}
            data-radix-collection-item=""
          >
            Portfolio
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="/about"
            className={cn(
              "text-lg font-medium hover:text-blue-500",
              "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 p-2 rounded-sm transition-all outline-none"
            )}
            data-radix-collection-item=""
          >
            About
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="/contact"
            className={cn(
              "text-lg font-medium hover:text-blue-500",
              "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 p-2 rounded-sm transition-all outline-none"
            )}
            data-radix-collection-item=""
          >
            Contact
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}