import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  // return (
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  // )
console.log("pageProps = ", pageProps);
  const getLayout =  Component.getLayout || ((page) => <Layout>{page}</Layout>)

  return getLayout(<Component  {...pageProps} />)
}