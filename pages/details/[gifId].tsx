import { GetServerSideProps } from 'next';

const GifDetailsPage = ({ gifId }: { gifId: string }) => {
  console.log(gifId);

  return <div></div>;
};

export default GifDetailsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const gifId = context.query.gifId!;
  const idStartIndex = gifId.lastIndexOf('-');
  const id = gifId.slice(idStartIndex + 1);

  return {
    props: {
      gifId: id,
    },
  };
};
