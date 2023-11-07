import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function userNameInfo() {
  const [time, setTime] = useState();

  const router = useRouter();
  const {username, info} = router.query;

  return (
    <>
      <h1>{username}'s {info}</h1>
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
