import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function cartSlug() {
  const router = useRouter();
  const {date} = router.query;
console.log("date = ", date);
  return (
    <>
      <h1>{JSON.stringify(date)}</h1>
      {/* <h1>{slug}</h1> */}
      <Link href="/cart/2022/11/07">2023년 11월 7일로</Link>
      <button onClick={()=>router.push("/cart/2023/09/10")}>2023년9월10일로</button>
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
