import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useState } from 'react';

export default function CategorySlug() {
  const [time, setTime] = useState();

  return (
    <>
      <h1>Category Slug</h1>
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
