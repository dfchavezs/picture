import { Route, Routes } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Home from "../../pages/Home/Home";
import TagSearch from "../../pages/TagSearch/TagSearch";

function Routers() {
  return (
    <Routes>
      <Route
        path="/tag/:tag"
        element={
          <Layout>
            <TagSearch />
          </Layout>
        }
      />
      <Route
        path="/*"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
    </Routes>
  );
}
export default Routers;
