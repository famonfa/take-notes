import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Post, PostInformation, Subject } from "@prisma/client";

interface SubjectContextType {
  subjects: Subject[];
  fetchSubjects: () => Promise<void>;
  subject: Subject | null;
  fetchSubject: (id: number) => Promise<void>;
  posts: Post[];
  fetchPosts: (id: number) => Promise<void>;
  post: Post | null;
  postInfo: string[];
  setPostInfo: (postInfo: string[]) => void;
  fetchComments: (id: number) => Promise<void>;
  comments: Comment[];
  createComment: (id: number, comment: string, userId: string) => Promise<void>;
  createSubject: (subjectData: any) => Promise<void>;
  createPost: (id: number, name: string) => Promise<void>;
  fetchPostInfo: (id: number) => Promise<void>;
  createPostInfo: (id: number, postInfoHtml: string) => Promise<void>;
  updatePostInfo: (id: number, extendedPostInfo: any) => Promise<void>;
  commentLike: Number[];
  createCommentLike: (commentId: number, userId: string) => void;
}

export const SubjectContext = createContext<SubjectContextType | null>(null);

export const useSubjects = () => {
  const context = useContext(SubjectContext);
  if (!context) {
    throw new Error("useSubjects must be used within a SubjectsProvider");
  }
  return context;
};

export const SubjectProvider = ({ children }: PropsWithChildren<{}>) => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [subject, setSubject] = useState<Subject | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<any[]>([]);
  const [commentLike, setCommentLike] = useState<any[]>([]);
  const [post, setPost] = useState<Post | null>(null);
  const [postInfo, setPostInfo] = useState<string[]>([]);

  async function fetchSubjects() {
    const res = await fetch("http://localhost:3000/api/subjects");
    const data = await res.json();
    setSubjects(data);
  }

  async function fetchSubject(id: number) {
    const res = await fetch("http://localhost:3000/api/subjects/" + id);
    const data = await res.json();
    setSubject(data);
  }

  async function fetchPosts(id: number) {
    const res = await fetch("http://localhost:3000/api/posts/" + id);
    const data = await res.json();
    setPosts(data);
  }

  async function fetchComments(id: number) {
    const res = await fetch("http://localhost:3000/api/comments/" + id);
    const data = await res.json();
    setComments(data);
  }

  async function fetchPostInfo(id: number) {
    const res = await fetch("http://localhost:3000/api/post-info/" + id);
    const data = await res.json();
    setPostInfo(data);
  }

  async function createPostInfo(id: number, postInfoHtml: string) {
    try {
      const res = await fetch("http://localhost:3000/api/posts/" + id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postInfoHtml: postInfoHtml,
          id: id,
        }),
      });
      if (res.ok) {
        setPostInfo([postInfoHtml]);
      } else {
        throw new Error("Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  }

  async function updatePostInfo(id: number, extendedPostInfo: any) {
    console.log("hi", id);

    try {
      const res = await fetch("http://localhost:3000/api/post-info/" + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          extendedPostInfo: extendedPostInfo,
          id: id,
        }),
      });
      if (res.ok) {
        setPostInfo([...postInfo, extendedPostInfo]);
      } else {
        throw new Error("Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  }
  async function createComment(id: number, comment: string, userId: string) {
    try {
      const res = await fetch("http://localhost:3000/api/comments/" + id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: comment,
          userId: userId,
          postId: id,
        }),
      });

      if (res.ok) {
        setComments([
          ...comments,
          {
            id: comments.length + 1,
            comment: comment,
            userId: userId,
            postId: id,
          },
        ]);
      } else {
        throw new Error("Failed to create comment");
      }
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  }

  async function createCommentLike(commentId: number, userId: string) {
    try {
      const res = await fetch("http://localhost:3000/api/commentLike/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          commentId: commentId,
          userId: userId,
        }),
      });
      if (res.ok) {
        const updatedCommentLike = [
          ...commentLike,
          {
            commentId: commentId,
            userId: userId,
          },
        ];
        setCommentLike(updatedCommentLike);

        const updatedComments = comments.map((comment) => {
          if (comment.id === commentId) {
            return { ...comment, likeCount: comment.likeCount + 1 };
          }
          return comment;
        });
        setComments(updatedComments);
      } else {
        throw new Error("Failed to create comment");
      }
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  }

  async function createSubject(subjectData: any) {
    try {
      const res = await fetch("http://localhost:3000/api/subjects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subjectData),
      });

      if (res.ok) {
        const newSubject = await res.json();
        setSubjects([...subjects, newSubject]);
      } else {
        throw new Error("Failed to create subject");
      }
    } catch (error) {
      console.error("Error creating subject:", error);
    }
  }

  async function createPost(id: number, name: string) {
    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subjectId: id,
          name: name,
        }),
      });

      if (res.ok) {
        console.log(res, "response");

        const newPost = await res.json();
        console.log(newPost, "new post");

        setPosts([...posts, newPost]);
      } else {
        throw new Error("Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  }

  return (
    <SubjectContext.Provider
      value={{
        subjects,
        fetchSubjects,
        subject,
        fetchSubject,
        posts,
        fetchPosts,
        post,
        postInfo,
        setPostInfo,
        fetchComments,
        comments,
        createComment,
        createSubject,
        createPost,
        fetchPostInfo,
        createPostInfo,
        updatePostInfo,
        commentLike,
        createCommentLike,
      }}
    >
      {children}
    </SubjectContext.Provider>
  );
};
