"use client";
import { Button } from "@/app/components/Button";
import Container from "@/app/components/Container";
import Sidebar from "@/app/components/Sidebar";
import { useSubjects } from "@/app/context/context-calls";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Text } from "@/app/ui-styles/Text";
import CommentsMain from "@/app/components/CommentsMain";
import { Loading } from "@/app/components/Loading";
import Post from "@/app/screens/Post";

const PostInfo = ({ params }: { params: { post: string; id: string } }) => {
  const { fetchPostInfo, postInfo, posts, fetchPosts } = useSubjects();

  useEffect(() => {
    fetchPostInfo(Number(params.post));
    if (!posts.length) {
      fetchPosts(Number(params.id));
    }
  }, []);

  return (
    <>
      <Sidebar posts={posts} id={params.id} />
      <Container css="max-h-[98dvh] overflow-y-scroll no-scrollbar ">
        <Post
          id={params.id}
          post={params.post}
          postInfo={postInfo}
          posts={posts}
        />
      </Container>
    </>
  );
};

export default PostInfo;
