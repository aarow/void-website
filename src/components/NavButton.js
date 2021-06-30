import Link from "next/link";
import { useRouter } from "next/router";
import { Nav } from "react-bootstrap";

export default function NavButton(props) {
  const router = useRouter();
  const activeClass = router.asPath === props.path ? "active" : "inactive";

  return (
    <Link href={props.path} passHref>
      <Nav.Link className={`px-md-2 ${activeClass} ${props.className}`}>
        <span>{props.label}</span>
      </Nav.Link>
    </Link>
  );
}
