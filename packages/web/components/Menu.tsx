import Link from "next/link";

const menus = [
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/faq",
    label: "FAQ",
  },
  {
    path: "/privacy",
    label: "Privacy",
  },
];

const Menu: React.FC = () => {
  return (
    <div className="flex justify-between p-2 md:p-6">
      <div>
        <Link href="/" passHref>
          <a className="hover:underline">Data Collectior</a>
        </Link>
      </div>
      <div>
        {menus.map((menu) => (
          <Link key={menu.path} href={menu.path} passHref>
            <a className="pl-2 hover:underline">{menu.label}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;