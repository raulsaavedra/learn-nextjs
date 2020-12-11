import nextConnect from 'next-connect';

const handler = nextConnect()
  .get((req, res) => {
    res.json({ message: 'ok' });
  })
  .post((req, res) => {
    res.json({ message: 'post' });
  });
export default handler;
