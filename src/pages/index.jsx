import Link from 'next/link';

const Page = ({ content }) => (
  <div>
    <h1>{content.title}</h1>
    <Link href="/notes">
      <a>Go to Notes</a>
    </Link>
  </div>
);

export function getStaticProps() {
  // get data from a CMS
  return {
    props: {
      content: {
        title: 'This is my really nice Next app',
      },
    },
  };
}

export default Page;
