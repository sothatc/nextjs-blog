import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import { useRouter } from "next/router";
import { useState } from "react";

export async function getServerSideProps() {
  console.log('server');

  return {
    props: {},
  };
}

export default function MyInfo() {
  const [clicked, setClicked] = useState(false);

  const router = useRouter();

  const {status = "initial"} = router.query;

  return (
    <>
      <h1>MyInfo</h1>
      <h1>Clicked: {String(clicked)}</h1>
      <h1>Status: {status}</h1>
      <button onClick={() => {
        alert("edit");
        setClicked(true);
        //replace는 서버사이드패칭이 일어나고 리렌더링하면서 로컬의 state값을 초기화
        location.replace("/settings/my/info?status=editing")
      }}>edit (replace)</button>
      <br/>
      <button onClick={() => {
        alert("edit");
        setClicked(true);
        //push는 서버사이드패칭은 동작하지만 로컬의 state값은 유지된다.
        router.push("/settings/my/info?status=editing")
      }}>edit (push)</button>
      <br/>
      <button onClick={() => {
        alert("edit");
        setClicked(true);
        //shallow는 서버사이드패칭이 일어나지않고, 로컬의 state값도 유지한다. (url만 바꾼것)
        //but, 아예 다른 url로 이동하면 유지되지 않음. 동일 페이지에서 쿼리만 바꿀 수 있는 것!
        router.push("/settings/my/info?status=editing", undefined,{
          shallow: true,
        })
      }}>edit (shallow)</button>
    </>
  );
}

MyInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
