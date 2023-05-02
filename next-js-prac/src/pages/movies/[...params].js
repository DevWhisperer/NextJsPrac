import Seo from "@/components/seo";

export default function Detail({ params }) {
  console.log(params);
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h1>{title}</h1>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
