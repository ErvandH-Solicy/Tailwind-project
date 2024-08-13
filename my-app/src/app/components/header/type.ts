enum NavLinkEnum {
  HOME = "home",
  ABOUT = "About",
  SERVICES = "Services",
  PORTFOLIO = "Portfolio",
  CAREERS = "Careers",
  BLOG = "Blog",
  CONTACT = "Contact"
}

interface INavLink {
  name: string,
  href: string
}

export const navData: INavLink[] = [
  { name: NavLinkEnum.HOME, href: "#" },
  { name: NavLinkEnum.ABOUT, href: "#" },
  { name: NavLinkEnum.SERVICES, href: "#" },
  { name: NavLinkEnum.PORTFOLIO, href: "#" },
  { name: NavLinkEnum.CAREERS, href: "#" },
  { name: NavLinkEnum.BLOG, href: "#" },
  { name: NavLinkEnum.CONTACT, href: "#" },
];