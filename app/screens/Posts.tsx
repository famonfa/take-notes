import React from "react";
import { Button } from "@/app/components/Button";
import { useSubjects } from "@/app/context/context-calls";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Text } from "@/app/ui-styles/Text";
import CommentsMain from "@/app/components/CommentsMain";
import { Loading } from "@/app/components/Loading";
import { ModalPost } from "../components/ModalPost";

const Posts = ({ id }: { id: string }) => {
  const { posts, fetchPosts, subject, fetchSubject, comments, fetchComments } =
    useSubjects();

  useEffect(() => {
    fetchPosts(Number(id));
    fetchSubject(Number(id));
    fetchComments(Number(id));
  }, []);

  return (
    <>
      <div className="flex flex-col justify-between w-full lg:flex-row ml-0 sm:ml-[240px]">
        {!subject || !posts ? (
          <Loading />
        ) : (
          <>
            <div className="lg:w-[50%]">
              <div className="flex flex-row justify-between items-center sm:justify-start sm:gap-8">
                <Text title>{subject?.name}</Text>
                <Button
                  onClick={() =>
                    // @ts-ignore
                    document.getElementById("my_modal_3")?.showModal()
                  }
                  small
                  css="mb-5 sm:mb-4"
                >
                  +Add post
                </Button>
              </div>
              <Text subtitle>{subject?.description}</Text>
              <div className="w-[100%] flex flex-col gap-3 md:flex-row md:flex-wrap  ">
                {posts.map((post: { id: number; name: string }) => (
                  <Link href={`/subjects/${id}/${post.id}`} key={post.id}>
                    <Button css="w-[100%] md:w-[100%] lg:w-fit">
                      {post.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}

        <CommentsMain comments={comments} id={id} />
      </div>
      <ModalPost id={id} />
    </>
  );
};

export default Posts;
