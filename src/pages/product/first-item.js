import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useState } from 'react';

export default function FirstItem() {
  const [time, setTime] = useState();

  return (
    <>
      <h1>First Item</h1>
    </>
  );
}

FirstItem.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
