import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function userNameInfo() {
  const [time, setTime] = useState();
  const [name, setName] = useState('?');

  const router = useRouter();
  const {username, info, uid} = router.query;

  // useEffect(() => {
  //   fetch('/api/user')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setName(data.name);
  //     })
  // },[])
  useEffect(() => {
    if(uid !== null) {
      fetch(`/api/user-info/${uid}`)
        .then((res) => res.json())
        .then((data) => {
          setName(data.name);
        });
    }
  },[uid])


  return (
    <>
      <h1>{username}'s {info}</h1>
      <h1>Name: {name}</h1>
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
