import { NoteData, Tag } from "./App";
import { NoteForm } from "./NoteForm";

export function NewNote({ onSubmit, onAddTag, availableTags }: NewNoteProps) {
  return (
    <>
      <h1 className="mb-4">New note</h1>
      <NoteForm/>
    </>
  );
}
