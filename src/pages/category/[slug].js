import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function CategorySlug() {
  const [time, setTime] = useState();

  const router = useRouter();
  const {slug, from} = router.query;
  console.log("slug= ", slug);

  return (
    <>
      <h1>Category Slug {slug} from {from}</h1>
    </>
  );
}

CategorySlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
