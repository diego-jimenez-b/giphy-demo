import { useRouter } from 'next/router';

const GifsGalleryPage = () => {
  const router = useRouter();

  return <div>some page {router.query.pageNum}</div>;
};

export default GifsGalleryPage;
