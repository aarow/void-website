import Cta from "./cta";

const CtaList = (props) => {
  console.log(props);
  return (
    <ul>
      {/* {props.items.map((cta) => {
        return (
          <li>
            <Cta key={cta.id} {...cta}></Cta>
          </li>
        );
      })} */}
    </ul>
  );
};

export default CtaList;
