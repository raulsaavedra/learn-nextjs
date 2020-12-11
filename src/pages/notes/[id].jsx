const Page = ({ note }) => <h1>Note {note.id}</h1>;

export default Page;

export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`${process.env.API_URL}/api/note/${params.id}`);
  if (!response.ok) {
    res.writeHead(302, {
      Location: '/notes',
    });
    res.end();
    return {
      props: {},
    };
  }

  const { data } = await response.json();
  console.log('note', data);
  return {
    props: { note: data },
  };
}
