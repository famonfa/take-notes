"use client";
import { Button } from "@/app/components/Button";
import { AuroraBackground } from "@/app/components/aurora-background";
import { Text } from "@/app/ui-styles/Text";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  // const setSmoothScroll = (isSmooth: boolean) => {
  //   document.documentElement.style.scrollBehavior = isSmooth
  //     ? "smooth"
  //     : "auto";
  //   window.addEventListener("scroll", () => {
  //     document.documentElement.style.scrollBehavior = "auto";
  //     router.refresh();
  //   });
  // };

  return (
    <div
      className="w-full flex flex-col sm:flex-row scroll"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="sm:w-1/2 bg-blue-600">
        <AuroraBackground>
          <>
            <Text title css="text-white text-5xl text-center pl-2 pr-2">
              Write your notes and share them with the world
            </Text>
            <div
              onClick={() => {
                const id = "signup";
                const el = document.getElementById(id);

                window.scrollTo(0, 1000);
              }}
              className="animate-bounce absolute bottom-[5%] sm:hidden"
            >
              <Button>Login</Button>{" "}
            </div>
          </>
        </AuroraBackground>
      </div>
      <div className=" sm:w-1/2 ">{children}</div>
    </div>
  );
}
