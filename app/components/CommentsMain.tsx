import React, { useEffect, useState } from "react";
import { Text } from "@/app/ui-styles/Text";
import { TextArea } from "../ui-styles/Input";
import { FaHeart } from "react-icons/fa";
import { Loading } from "./Loading";
import { useSubjects } from "../context/context-calls";
import { Submit } from "./Button";
import FormatDate from "./FormatDate";
import { useSession } from "next-auth/react";
import Link from "next/link";

type Props = {
  comments: any;
  id: string;
};

const CommentsMain = ({ id }: Props) => {
  const { data: session, status } = useSession();
  const { createComment, createCommentLike, comments, fetchComments } =
    useSubjects();
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    fetchComments(Number(id));
  }, []);

  const handleCommentSubmit = async () => {
    try {
      await createComment(Number(id), newComment, session?.user?.id);
      setNewComment("");
    } catch {
      console.error("Error creating comment");
    }
  };

  const handleCommentLikeSubmit = async ({
    commentId,
  }: {
    commentId: number;
  }) => {
    try {
      await createCommentLike(commentId, session?.user?.id);
    } catch {
      console.error("Error creating comment");
    }
  };

  if (!comments) {
    return null;
  }

  return (
    <>
      <div className="w-[100%]  lg:w-[50%] ">
        {!comments ? (
          <Loading />
        ) : (
          <div className="relative max-h-[95dvh] overflow-y-scroll no-scrollbar">
            <div className="sticky top-0 dark:bg-gray-900 bg-white pl-3 pt-2 rounded">
              <Text css="mt-6" titleSecondary>
                {comments.length} {""}
                {comments.length === 1 ? "comment" : "comments"}
              </Text>
              {status === "unauthenticated" ? (
                <Text info>
                  <Link
                    className="hover:underline text-sky-800"
                    href={`/auth/signin`}
                  >
                    Sign in{" "}
                  </Link>
                  to comment
                </Text>
              ) : (
                <TextArea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onClick={handleCommentSubmit}
                  placeholder="Add a comment"
                  newComment={newComment}
                />
              )}
            </div>

            <div className="w-full border-b border-foreground/10  flex flex-col-reverse">
              {comments.map((comment: any) => (
                <div className="w-full border-b border-foreground/10  flex flex-col-reverse">
                  <div className="flex flex-row gap-2 p-2 ">
                    {/* <div className="w-[50px] h-[50px] mt-[10px]  bg-purple-950 rounded-full flex items-center justify-center text-white ">
                    {comment.userId.split(" ")[0][0].toUpperCase()}
                  </div> */}
                    <div className="flex flex-col flex-wrap">
                      <div className="flex flex-row items-center flex-wrap line-clamp-1">
                        <Text css="text-[0.78rem]" info>
                          {!comment?.user?.name && !comment?.user?.username
                            ? session?.user?.name
                            : comment?.user.name ?? comment.user.username}
                        </Text>
                        <Text title css="mx-2">
                          -
                        </Text>
                        <FormatDate date={comment.createdAt} />
                      </div>
                      <div className="w-[100%]">
                        <Text css="mt-[-23px] text-[1em] line-clamp-3" par>
                          {comment.comment}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2  mt-[-14px]">
                        <Text info css="text-[0.7rem]">
                          {comment.likeCount > 0 ? comment.likeCount : 0}{" "}
                        </Text>
                        <FaHeart
                          onClick={() => {
                            handleCommentLikeSubmit({ commentId: comment.id });
                          }}
                          size={15}
                          className={`${
                            comment.likeCount > 0 ? "text-red-500" : ""
                          } cursor-pointer `}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CommentsMain;
