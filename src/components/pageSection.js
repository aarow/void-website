import * as Blocks from "./pageSectionTypes";

export default function PageSection(props) {
  // if page section isn't available, skip
  if (!props.items[0]) return <></>;

  const Component =
    props.items[0].__typename === "TeamMember"
      ? Blocks["TeamMemberCardList"]
      : Blocks[props.items[0].__typename];

  return (
    <>
      {props.items[0].__typename !== "TeamMember" &&
        props.items.map((item) => {
          return <Component key={item.id} {...item} />;
        })}
      {props.items[0].__typename === "TeamMember" && (
        <Component items={props.items} />
      )}
    </>
  );
}
