import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

function Home({ quote }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <figure className="quote">
          <blockquote>{quote}</blockquote>
        </figure>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://api.chucknorris.io/jokes/random`);
  const data = await res.json();
  const quote = data.value;
  return { props: { quote } };
}

export default Home;
