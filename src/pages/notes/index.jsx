import Link from 'next/link';

const Page = ({ notes }) => (
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

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL}/api/note`);
  const { data } = await response.json();
  return {
    props: { notes: data },
  };
}
