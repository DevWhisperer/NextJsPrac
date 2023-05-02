import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const goToPage = (path) => {
    router.push(path);
  };
  return (
    <nav>
      <div onClick={() => goToPage("/")}>Home</div>
      <div onClick={() => goToPage("/about")}>About</div>
    </nav>
  );
}
