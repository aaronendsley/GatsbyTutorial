import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const POST_ARCHIVE_QUERY = graphql`
  query posts {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt

          frontmatter {
            slug
            date(formatString: "MMMM DD YYYY")
            title
          }
        }
      }
    }
  }
`;

const Archive = () => {
  const data = useStaticQuery(POST_ARCHIVE_QUERY);

  return (
    <>
      <aside>
        <h3> Archive </h3>
        <ul>
          {console.log(data)}
          {data.allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.frontmatter.slug}>
              <Link to={`/posts${edge.node.frontmatter.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Archive;
