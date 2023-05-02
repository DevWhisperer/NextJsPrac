import Seo from "@/components/seo";
import { useRouter } from "next/router";

export default function Home({ results }) {
  const router = useRouter();

  const goToDetail = (title, id) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <div>
      <Seo title="Home" />
      <h1>Home</h1>
      {results.map((item) => (
        <div key={item.id} onClick={() => goToDetail(item.title, item.id)}>
          {item.title}
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
