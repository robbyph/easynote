import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useState } from 'react';

const TiptapTitle = ({ title, setTitle, currPage }) => {
  const editor = useEditor(
    {
      extensions: [StarterKit],
      editorProps: {
        attributes: {
          class:
            'prose prose-sm sm:prose lg:prose-xl min-w-full leading-8 xl:prose-2xl underline focus:outline-none',
        },
      },
      content: `<p>${title}</p>`,
    },
    [currPage]
  );

  editor?.on('update', ({ editor }) => {
    setTitle(editor.getText());
  });

  return <EditorContent editor={editor} />;
};

export default TiptapTitle;
