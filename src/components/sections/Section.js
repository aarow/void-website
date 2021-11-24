import * as Blocks from "./index";

export default function Section(props) {
  let Component = Blocks[props.__typename];

  return (
    <section className="page-section">
      <Component {...props} />
    </section>
  );
}
