import {
  ToggleButtonGroup,
  Stack,
  ToggleButton,
  ToggleButtonProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { forwardRef, useCallback } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatStrikethroughIcon from "@mui/icons-material/FormatStrikethrough";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import CodeIcon from "@mui/icons-material/Code";
import FormatClearIcon from "@mui/icons-material/FormatClear";
import WrapTextIcon from "@mui/icons-material/WrapText";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import LinkOffIcon from "@mui/icons-material/LinkOff";
import { Editor } from "@tiptap/react";

const StyledButton = styled(ToggleButton)<ToggleButtonProps>(({ theme }) => ({
  boxShadow: "none",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: theme.palette.divider,
  "--ToggleButton-radius": "none",
})) as typeof ToggleButton;

const ToolbarButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(
  (props, ref) => <StyledButton ref={ref} {...props} size="small" />
);

const MenuBar = ({ editor }: { editor: Editor }) => {
  const setUnsetLink = useCallback(() => {
    if (editor.isActive("link")) {
      editor.chain().focus().unsetLink().run();
      return;
    }
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  return (
    <Stack direction="column" spacing={1}>
      <Stack direction={"row"} spacing={1}>
        <ToggleButtonGroup aria-label="Text formatting">
          <ToolbarButton
            value="bold"
            aria-label="Toggle Bold selection"
            onClick={() => editor.chain().focus().toggleBold().run()}
            selected={editor.isActive("bold")}
          >
            <FormatBoldIcon />
          </ToolbarButton>
          <ToolbarButton
            value="italic"
            aria-label="Toggle Italic selection"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            selected={editor.isActive("italic")}
          >
            <FormatItalicIcon />
          </ToolbarButton>
          <ToolbarButton
            value="underline"
            aria-label="Toggle Italic selection"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            selected={editor.isActive("underline")}
          >
            <FormatUnderlinedIcon />
          </ToolbarButton>
          <ToolbarButton
            value="strike"
            aria-label="Toggle Strike through selection"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            selected={editor.isActive("strike")}
          >
            <FormatStrikethroughIcon />
          </ToolbarButton>
        </ToggleButtonGroup>
      </Stack>
      <ToggleButtonGroup>
        <ToolbarButton
          value="code"
          aria-label="Toggle Code block"
          onClick={() => editor.chain().focus().toggleCode().run()}
          selected={editor.isActive("code")}
        >
          <CodeIcon />
        </ToolbarButton>
        <ToolbarButton
          value="link"
          aria-label="Add Link"
          onClick={setUnsetLink}
        >
          {editor.isActive("link") ? <LinkOffIcon /> : <InsertLinkIcon />}
        </ToolbarButton>
        <ToolbarButton
          value="toggleBlockquote"
          aria-label="Toggle Blockquote selection"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          selected={editor.isActive("toggleBlockquote")}
        >
          <FormatQuoteIcon />
        </ToolbarButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup>
        <ToolbarButton
          value="heading2"
          aria-label="Toggle Heading 2 selection"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          selected={editor.isActive("heading2")}
        >
          h1
        </ToolbarButton>
        <ToolbarButton
          value="toggleHeading-3"
          aria-label="Toggle Heading 3 selection"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          selected={editor.isActive("toggleHeading-3")}
        >
          h2
        </ToolbarButton>
        <ToolbarButton
          value="toggleHeading-4"
          aria-label="Toggle Heading 4 selection"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          selected={editor.isActive("toggleHeading-4")}
        >
          h3
        </ToolbarButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup>
        <ToolbarButton
          value="toggleBulletList"
          aria-label="Toggle Bullet List selection"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          selected={editor.isActive("toggleBulletList")}
        >
          <FormatListBulletedIcon />
        </ToolbarButton>
        <ToolbarButton
          value="toggleOrderedList"
          aria-label="Toggle Ordered List selection"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          selected={editor.isActive("toggleOrderedList")}
        >
          <FormatListNumberedIcon />
        </ToolbarButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default MenuBar;
