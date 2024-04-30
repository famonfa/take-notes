import React from "react";
import { Button } from "@/app/components/Button";
import { useSubjects } from "@/app/context/context-calls";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Text } from "@/app/ui-styles/Text";
import CommentsMain from "@/app/components/CommentsMain";
import { Loading } from "@/app/components/Loading";
import { ModalPost } from "../components/ModalPost";
import { PostInformation, Post } from "@prisma/client";
import { useRouter } from "next/navigation";
import "./Post.css";
import TipTap from "../components/TipTap";

const Post = ({
  postInfo,
  id,
  post,
}: {
  postInfo: PostInformation[];
  posts: Post[];
  id: string;
  post?: string;
}) => {
  const router = useRouter();
  const [isEditable, setIsEditable] = useState(false);

  if (!postInfo) {
    return <Loading />;
  }

  if (!postInfo.length) {
    return (
      <div className="flex flex-col justify-center items-center h-[80dvh] w-full lg:flex-row ml-0 sm:ml-[240px]">
        <div className="flex flex-col justify-center items-center">
          <Text title>This post is still empty.</Text>
          <Text subtitle>Start writing your post</Text>
          <Button>+</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col w-full ml-0 sm:ml-[340px] mt-4  dark:text-white">
        {isEditable || !postInfo.length ? (
          <TipTap content={postInfo[0].postInfoHtml} />
        ) : (
          <>
            <Button
              css={"position: absolute right-0 top-0 mt-[20px] mr-[50px]"}
              onClick={() => setIsEditable(true)}
            >
              edit
            </Button>
            <article
              dangerouslySetInnerHTML={{ __html: postInfo[0].postInfoHtml }}
            ></article>
          </>
        )}
      </div>
    </>
  );
};

export default Post;
