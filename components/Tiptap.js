import '../styles/editor.module.scss';
import { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className='pt-2 pb-4 pl-2 space-x-2 space-y-2 border-b border-black'>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={
          editor.isActive('bold')
            ? 'is-active p-1 border border-black rounded-lg bg-slate-200'
            : 'p-1 border border-black rounded-lg'
        }
      >
        <strong>B</strong>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={
          editor.isActive('italic')
            ? 'is-active p-1 border border-black rounded-lg bg-slate-200'
            : 'p-1 border border-black rounded-lg'
        }
      >
        <em>I</em>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={
          editor.isActive('strike')
            ? 'is-active p-1 border border-black rounded-lg bg-slate-200'
            : 'p-1 border border-black rounded-lg'
        }
      >
        <s>strike</s>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={
          editor.isActive('code')
            ? 'is-active p-1 border border-black rounded-lg bg-slate-200'
            : 'p-1 border border-black rounded-lg'
        }
      >
        {'<code/>'}
      </button>
      <button
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className='p-1 border border-black rounded-lg'
      >
        clear marks
      </button>
      <button
        onClick={() => editor.chain().focus().clearNodes().run()}
        className='p-1 border border-black rounded-lg'
      >
        clear nodes
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={
          editor.isActive('paragraph')
            ? 'is-active p-1 border border-black rounded-lg bg-slate-200'
            : 'p-1 border border-black rounded-lg'
        }
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive('heading', { level: 1 })
            ? 'is-active p-1 border border-black rounded-lg bg-slate-200'
            : 'p-1 border border-black rounded-lg'
        }
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive('heading', { level: 2 })
            ? 'is-active p-1 border border-black rounded-lg bg-slate-200'
            : 'p-1 border border-black rounded-lg'
        }
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          editor.isActive('heading', { level: 3 })
            ? 'is-active p-1 border border-black rounded-lg bg-slate-200'
            : 'p-1 border border-black rounded-lg'
        }
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={
          editor.isActive('heading', { level: 4 })
            ? 'is-active p-1 border border-black rounded-lg bg-slate-200'
            : 'p-1 border border-black rounded-lg'
        }
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={
          editor.isActive('heading', { level: 5 })
            ? 'is-active p-1 border border-black rounded-lg bg-slate-200'
            : 'p-1 border border-black rounded-lg'
        }
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={
          editor.isActive('heading', { level: 6 })
            ? 'is-active p-1 border border-black rounded-lg bg-slate-200'
            : 'p-1 border border-black rounded-lg'
        }
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={
          editor.isActive('bulletList')
            ? 'is-active p-1 border border-black rounded-lg bg-slate-200'
            : 'p-1 border border-black rounded-lg'
        }
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          editor.isActive('orderedList')
            ? 'is-active p-1 border border-black rounded-lg bg-slate-200'
            : 'p-1 border border-black rounded-lg'
        }
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={
          editor.isActive('codeBlock')
            ? 'is-active p-1 border border-black rounded-lg bg-slate-200'
            : 'p-1 border border-black rounded-lg'
        }
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={
          editor.isActive('blockquote')
            ? 'is-active p-1 border border-black rounded-lg bg-slate-200'
            : 'p-1 border border-black rounded-lg'
        }
      >
        blockquote
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className='p-1 border border-black rounded-lg'
      >
        horizontal rule
      </button>
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className='p-1 border border-black rounded-lg'
      >
        hard break
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className='p-1 border border-black rounded-lg'
      >
        undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className='p-1 border border-black rounded-lg'
      >
        redo
      </button>
    </div>
  );
};
const TipTap = ({ noteContent, setContent, currPage }) => {
  const editor = useEditor(
    {
      extensions: [StarterKit, TaskList],
      editorProps: {
        attributes: {
          class:
            'prose prose-sm sm:prose pt-4 lg:prose-base xl:prose-lg ml-5 focus:outline-none',
        },
      },
      content: `${noteContent}`,
    },
    [currPage]
  );

  editor?.on('update', ({ editor }) => {
    setContent(editor.getHTML());
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TipTap;
