import clsx from "clsx";

function Container({ children }) {
  return (
    <div className={clsx("w-inherit", "p-[1.5rem_2.5rem]")}>{children}</div>
  );
}

export default Container;
