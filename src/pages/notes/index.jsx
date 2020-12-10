import Link from 'next/link';
import notes from '../../data/data';

const Page = () => (
  <div>
    <h1>Note Index Path</h1>
    {notes.map((note) => (
      <div>
        <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
          <a>{note.title}</a>
        </Link>
      </div>
    ))}
  </div>
);

export default Page;
