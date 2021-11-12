import Link from "next/link";

const menus = [
  {
    path: "/sign-up",
    label: "Sign Up",
  },
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
    <div className="flex justify-between p-2 md:p-6 text-gray-100">
      <div>
        <Link href="/" passHref>
          <a className="hover:underline">Data Collector</a>
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
