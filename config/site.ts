import { NavItem } from "@/types/nav"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
    docs: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Your mom's Blog Website",
  description:
    "You wish they were Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      'title': 'About',
      'href': '/about'  
    }
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
