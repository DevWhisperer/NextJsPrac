import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          background-color: gray;
        }
      `}</style>
    </Layout>
  );
}
