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
import Posts from "@/app/screens/Posts";

const PostPage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Sidebar id={params.id} menu />
      <Container css="max-h-[98dvh] overflow-y-scroll no-scrollbar ">
        <Posts id={params.id} />
      </Container>
    </>
  );
};

export default PostPage;
