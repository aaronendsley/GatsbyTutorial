import React from "react";

// import { Link } from "gatsby";

import Layout from "../components/layout";
import Listing from "../components/listing";

import SEO from "../components/seo";

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <Listing />
  </Layout>
);

export default IndexPage;
