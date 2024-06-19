import clsx from "clsx";
import Layout from "../../components/Layout";
import Header from "../../components/Layout/components/Content/components/Header";
import Links from "../../components/Links";

import cn from "./home.module.scss";
function Home() {
  return (
    <Layout>
      <Header title="Jaegar Resto" date="Tuesday, 2 Feb 2021" />
      <Links></Links>
      <hr className={clsx("mt-[calc(1rem-1px)]", "w-full")} />
    </Layout>
  );
}

export default Home;
