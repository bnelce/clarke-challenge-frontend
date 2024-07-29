import { siteConfig } from "@/config/site";

type NavItem = {
  title: string;
  href: string;
};

const Nav = () => {
  return (
    <ul className="flex space-x-4">
      {siteConfig.mainNav.map((item: NavItem) => (
        <li key={item.title}>
          <a href={item.href} className="text-gray-600 hover:text-green-600">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
