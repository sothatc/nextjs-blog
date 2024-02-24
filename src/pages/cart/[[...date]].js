import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CartDateSlug() {
  const router = useRouter();
  const {date} = router.query;

  return (
    <>
      <h1 className="title">Cart Date Slug {JSON.stringify(date)}</h1>
      <Link href="/cart/2024/02/24">
        <a>2024년 2월 24일</a>
      </Link>
      <br/>
      <button onClick={() => router.push('/cart/2024/02/30')}>2024년 2월 30일로</button>
    </>
  );
}

CartDateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
