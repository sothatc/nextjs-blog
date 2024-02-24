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
  const {status = 'initial'} = router.query;
  return (
    <>
      <h1 className="title">MyInfo</h1>
      <h1 className="title">Clicked: {String(clicked)}</h1>
      <h1 className="title">Status: {status}</h1>
      <button
        onClick={() => {
          alert('edit')
          setClicked(!clicked)
          location.replace('/settings/my/info?status=editing') // 리렌더링 발생, 로컬 satuts유지x
        }}>
        edit(replace)
      </button>
      <br/>
      <button
        onClick={() => {
          alert('edit')
          setClicked(!clicked)
          router.push('/settings/my/info?status=editing') // 로컬 status유지 but, server를 호출
        }}>
        edit(push)
      </button>
      <br/>
      <button
        onClick={() => {
          alert('edit')
          setClicked(!clicked)
          router.push('/settings/my/info?status=editing', undefined, {shallow: true}) // 로컬 status유지, server도 호출하지 않음
        }}>
        edit(shallow)
      </button>
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
