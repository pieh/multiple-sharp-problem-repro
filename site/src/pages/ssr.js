import React from "react";
import { graphql } from "gatsby";

export default function SSR() {
  return <div>hello world</div>;
}

export const q = graphql`
  {
    allFile {
      nodes {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

export function getServerData() {
  return {
    props: {
      ssr: true,
    },
  };
}
