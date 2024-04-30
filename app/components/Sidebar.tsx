import React from "react";
import ThemeToggle from "./ThemeToggle";
import SidePostInfo from "./SidePostInfo";
import { Post } from "@prisma/client";
import { useSession } from "next-auth/react";
import { Text } from "../ui-styles/Text";
import Link from "next/link";
import { GiRamProfile } from "react-icons/gi";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { GiHound } from "react-icons/gi";
import { GiSwordman } from "react-icons/gi";
import { usePathname } from "next/navigation";

type Props = {
  posts?: Post[];
  id: string;
  post?: string;
  menu?: boolean;
};

const Sidebar = ({ posts, id, menu }: Props) => {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  console.log(pathname);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Not signed in</div>;
  }

  const menuBar = [
    {
      name: "Favourites",
      link: "/favourites",
      icon: (
        <GiHound className="text-2xl  text-sky-900/50 dark:text-sky-600/50" />
      ),
    },
    {
      name: "History",
      link: "/history",
      icon: (
        <GiSwordman className="text-2xl  text-sky-900/50 dark:text-sky-600/50" />
      ),
    },
    {
      name: "Following",
      link: "/following",
      icon: (
        <GiRamProfile className="text-2xl text-sky-900/50 dark:text-sky-600/50" />
      ),
    },
    {
      name: "Profile",
      link: "/profile",
      icon: (
        <GiPlagueDoctorProfile className="text-2xl  text-sky-900/50 dark:text-sky-600/50" />
      ),
    },
  ];

  return (
    <div className="fixed left-0 top-0 border-r border-foreground h-screen w-[240px] flex hidden sm:block">
      <div className="p-3">
        {session.user && menu && (
          <>
            <Text title>{session.user.name}</Text>
            <div className="flex flex-col gap-3 mt-[2.3rem]">
              {menuBar.map((item) => (
                <div className="flex items-center gap-2 p-1 rounded dark:hover:bg-sky-900/50 hover:bg-sky-200/30">
                  <div>{item.icon}</div>
                  <Link href={item.link} key={item.name}>
                    <Text css="mb-0" par>
                      {item.name}
                    </Text>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}

        {posts && <SidePostInfo id={id} posts={posts} />}
      </div>
    </div>
  );
};
export default Sidebar;
