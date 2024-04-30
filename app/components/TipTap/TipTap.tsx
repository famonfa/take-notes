"use client";

// import {
//   BubbleMenu,
//   EditorContent,
//   FloatingMenu,
//   useEditor,
// } from '@tiptap/react'
// import StarterKit from '@tiptap/starter-kit'
// import React from 'react'
// import { useSubjects } from '@/app/context/context-calls'
// import { useEffect } from 'react'
// import { Button } from './Button'
// import Underline from '@tiptap/extension-underline'

// export default () => {
//   const { postInfo, createPostInfo } = useSubjects();

//   const editor = useEditor({
//     extensions: [
//       StarterKit, Underline
//     ],
//     content: ''
//   })

//   const json = editor?.getJSON();

//   console.log(postInfo);

//   const handleSave = () => {
//     if (json) {
//       console.log(json, "json");
//       createPostInfo(2, json);
//     }
//   }

//   useEffect(() => {
//     if (postInfo.length) {
//       editor?.commands.setContent(postInfo[0].extendedPostInfo);
//     }
//   }, [editor, postInfo]);

//   return (
//     <>
//     <Button onClick={handleSave}>save!</Button>
//       {editor && <BubbleMenu className="bubble-menu bg-orange-800 p-3 rounded-sm flex gap-3"  tippyOptions={{ duration: 100 }} editor={editor}>
//       <button
//             onClick={() => editor.chain().focus().toggleBold().run()}

//             className={editor.isActive('bold') ? 'is-active' : ''}
//         >
//             bold
//         </button>
//         <button
//             onClick={() => editor.chain().focus().toggleItalic().run()}
//             disabled={
//             !editor.can()
//                 .chain()
//                 .focus()
//                 .toggleItalic()
//                 .run()
//             }
//             className={editor.isActive('italic') ? 'is-active' : ''}
//         >
//             italic
//         </button>
//         <button
//             onClick={() => editor.chain().focus().toggleUnderline().run()}
//             disabled={
//             !editor.can()
//                 .chain()
//                 .focus()
//                 .toggleUnderline()
//                 .run()
//             }
//             className={editor.isActive('underline') ? 'is-active' : ''}
//         >
//             underline
//         </button>
//         <button
//             onClick={() => editor.chain().focus().toggleStrike().run()}
//             disabled={
//             !editor.can()
//                 .chain()
//                 .focus()
//                 .toggleStrike()
//                 .run()
//             }
//             className={editor.isActive('strike') ? 'is-active' : ''}
//         >
//             strike
//         </button>
//         <button
//             onClick={() => editor.chain().focus().toggleCode().run()}
//             disabled={
//             !editor.can()
//                 .chain()
//                 .focus()
//                 .toggleCode()
//                 .run()
//             }
//             className={editor.isActive('code') ? 'is-active' : ''}
//         >
//             code
//         </button>
//         <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
//             clear marks
//         </button>
//         <button onClick={() => editor.chain().focus().clearNodes().run()}>
//             clear nodes
//         </button>
//         <button
//             onClick={() => editor.chain().focus().setParagraph().run()}
//             className={editor.isActive('paragraph') ? 'is-active' : ''}
//         >
//             paragraph
//         </button>
//         <button
//             onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
//             className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
//         >
//             h1
//         </button>
//         <button
//             onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
//             className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
//         >
//             h2
//         </button>
//         <button
//             onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
//             className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
//         >
//             h3
//         </button>
//         <button
//             onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
//             className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
//         >
//             h4
//         </button>
//         <button
//             onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
//             className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
//         >
//             h5
//         </button>
//         <button
//             onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
//             className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
//         >
//             h6
//         </button>
//         <button
//             onClick={() => editor.chain().focus().toggleBulletList().run()}
//             className={editor.isActive('bulletList') ? 'is-active' : ''}
//         >
//             bullet list
//         </button>
//         <button
//             onClick={() => editor.chain().focus().toggleOrderedList().run()}
//             className={editor.isActive('orderedList') ? 'is-active' : ''}
//         >
//             ordered list
//         </button>
//         <button
//             onClick={() => editor.chain().focus().toggleCodeBlock().run()}
//             className={editor.isActive('codeBlock') ? 'is-active' : ''}
//         >
//             code block
//         </button>
//         <button
//             onClick={() => editor.chain().focus().toggleBlockquote().run()}
//             className={editor.isActive('blockquote') ? 'is-active' : ''}
//         >
//             blockquote
//         </button>
//         <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
//             horizontal rule
//         </button>
//         <button onClick={() => editor.chain().focus().setHardBreak().run()}>
//             hard break
//         </button>
//         <button
//             onClick={() => editor.chain().focus().undo().run()}
//             disabled={
//             !editor.can()
//                 .chain()
//                 .focus()
//                 .undo()
//                 .run()
//             }
//         >
//             undo
//         </button>
//         <button
//             onClick={() => editor.chain().focus().redo().run()}
//             disabled={
//             !editor.can()
//                 .chain()
//                 .focus()
//                 .redo()
//                 .run()
//             }
//         >
//             redo
//         </button>
//         <button
//             onClick={() => editor.chain().focus().setColor('#958DF1').run()}
//             className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}
//         >
//             purple
//         </button>
//       </BubbleMenu>}

//       {editor && <FloatingMenu className="floating-menu" tippyOptions={{ duration: 100 }} editor={editor}>

//       </FloatingMenu>}

//       <EditorContent editor={editor} />
//     </>
//   )
// }

import * as React from "react";
import {
  BubbleMenu,
  FloatingMenu,
  useEditor,
  EditorContent,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { EditorOptions } from "@tiptap/core";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";
import Mention from "@tiptap/extension-mention";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";
import "./TipTap.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

import MenuBar from "./MenuBar";
import { ColorHighlighter, SmilieReplacer } from "./extensions";
import { useSubjects } from "@/app/context/context-calls";
import suggestion from "./mentionSuggestions";
import { Button } from "../Button";
import { useCallback, useEffect } from "react";

interface Props {
  content: EditorOptions["content"];
  showCounts?:
    | boolean
    | ((characters: number, words: number) => React.ReactNode);
}

const Tiptap = ({ content, showCounts }: Props) => {
  const { postInfo, setPostInfo, createPostInfo } = useSubjects();

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "awesome-wysiwyg-editor",
      },
    },
    // onUpdate: ({ editor }) => {
    //   setPostInfo([{ postInfoHtml: editor.getHTML() }]);
    // },
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2, 3, 4, 5],
        },
      }),
      Image,
      TextAlign,
      TextStyle,
      Underline,
      Link.configure({
        openOnClick: false,
        validate: (href) => /^https?:\/\//.test(href),
      }),
      CharacterCount,
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === "heading") {
            return "What’s the title?";
          }

          return "Can you add some further context?";
        },
      }),
      ColorHighlighter,
      SmilieReplacer,
      Mention.configure({
        HTMLAttributes: {
          class: "mention",
        },
        suggestion,
      }),
      Youtube.configure({
        inline: false,
        nocookie: true,
      }),
    ],
    content,
  });

  const html = editor?.getHTML();

  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor?.chain().focus().extendMarkRange("image").clearContent().run();
      return;
    }

    editor?.chain().focus().setImage({ src: url }).run();
  }, [editor]);

  const addYoutubeVideo = useCallback(() => {
    const url = prompt("Enter YouTube URL");

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor?.chain().focus().extendMarkRange("youtube").clearContent().run();
      return;
    }

    editor?.commands.setYoutubeVideo({
      src: url,
      width: 320,
      height: 180,
    });
  }, [editor]);

  useEffect(() => {
    if (postInfo.length) {
      editor?.commands.setContent(postInfo[0].postInfoHtml);
    }
  }, [editor, postInfo]);

  if (!editor) {
    return null;
  }

  const handleSave = () => {
    if (html) {
      console.log(html, "html");
      createPostInfo(1, html);
    }
  };

  return (
    <>
      <Button
        css={"position: absolute right-0 top-0 mt-[20px] mr-[50px]"}
        onClick={handleSave}
      >
        SAVE!
      </Button>
      <BubbleMenu
        className="bubble-menu"
        editor={editor}
        tippyOptions={{ duration: 100 }}
      >
        <MenuBar editor={editor} />
      </BubbleMenu>
      <FloatingMenu
        className="floating-menu"
        tippyOptions={{ duration: 100 }}
        editor={editor}
      >
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is-active" : ""
          }
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          Bullet List
        </button>
        <button value="image" aria-label="Insert an image" onClick={addImage}>
          <AddPhotoAlternateIcon />
        </button>
        <button
          value="youtube"
          aria-label="Insert a Youtube video"
          onClick={addYoutubeVideo}
        >
          <YouTubeIcon />
        </button>
      </FloatingMenu>
      <EditorContent
        className="h-[calc(100vh-64px)] dark:text-white "
        editor={editor}
      />
    </>
  );
};

export default Tiptap;
