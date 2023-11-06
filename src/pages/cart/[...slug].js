import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useState } from 'react';

export default function cartSlug() {
  const [time, setTime] = useState();

  return (
    <>
      <h1>cart Slug</h1>
    </>
  );
}

cartSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
