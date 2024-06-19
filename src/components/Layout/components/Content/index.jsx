import clsx from "clsx";
import Container from "../../../Container";

import cn from "./Content.module.scss";

function Content({ children }) {
  return (
    <div className={clsx("w-full", "h-[100vh]", "bg-[#2d303e]", "pl-[4rem]")}>
      <Container>{children}</Container>
    </div>
  );
}

export default Content;
