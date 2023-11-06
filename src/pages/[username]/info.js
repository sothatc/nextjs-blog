import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useState } from 'react';

export default function userNameInfo() {
  const [time, setTime] = useState();

  return (
    <>
      <h1>user Name Info</h1>
    </>
  );
}

userNameInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
