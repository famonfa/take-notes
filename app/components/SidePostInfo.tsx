import { Post } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { LoadingSideBar } from "./Loading";
import { Text } from "@/app/ui-styles/Text";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { useSubjects } from "../context/context-calls";

const SidePostInfo = ({ posts, id }: { posts: Post[]; id: string }) => {
  const { subject, fetchSubject } = useSubjects();
  const [filterPosts, setFilterPosts] = useState<Post[]>(posts);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    const filteredPosts = posts.filter((post) =>
      post.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilterPosts(filteredPosts);
  };

  useEffect(() => {
    setFilterPosts(posts);
    if (!subject) {
      fetchSubject(Number(id));
    }
  }, [posts]);

  return (
    <div>
      {!filterPosts.length ? (
        <LoadingSideBar />
      ) : (
        <div>
          <Text titleSecondary>{subject?.name}</Text>
          <div className="w-[100%] flex justify-end items-center relative">
            <IoIosSearch className="absolute  w-10" />
            <input
              onChange={handleSearch}
              placeholder="Search"
              type="text"
              name="search"
              className="w-[100%] dark:text-white mt-3 mb-3 dark:bg-slate-600 bg-slate-300/50 placeholder:m-14 p-2 rounded-md focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-3">
            {filterPosts.map((post: Post) => (
              <Link
                key={post.id}
                href={`/subjects/${post.subjectId}/${post.id}`}
              >
                <div
                  className="w-[100%] p-3 dark:bg-sky-800/20 dark:text-gray-300 bg-sky-100/55 rounded-md	"
                  key={post.id}
                >
                  <Text infoSideBar>{post.name}</Text>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidePostInfo;
