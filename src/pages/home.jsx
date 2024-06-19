import Layout from "../components/Layout";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SearchInput from "../components/SearchInput";

function Home() {
  return (
    <Layout>
      <Header title="Jaegar Resto" date="Tuesday, 2 Feb 2021">
        <SearchInput placeholder={"Search for food, coffe, etc.."} />
      </Header>
      <Navbar />
      <hr />
    </Layout>
  );
}

export default Home;
