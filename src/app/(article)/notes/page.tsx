import { Metadata } from 'next';

import { getSortedNotes } from '@/data/data-accessor';
import Title from '@/components/title';
import NoteItem from '@/components/(article)/note-item';

export const metadata: Metadata = {
  title: '스치는 기록들',
  description: '스쳐 지나가며 떠오른 생각들을 기록합니다.',
};

export default function Notes() {
  const notes = getSortedNotes();

  return (
    <>
      <header>
        <Title>스치는 기록들</Title>
      </header>
      <ul className="flex w-full flex-col gap-6">
        {notes.map(note => (
          <NoteItem key={note.slug} note={note} />
        ))}
      </ul>
    </>
  );
}
