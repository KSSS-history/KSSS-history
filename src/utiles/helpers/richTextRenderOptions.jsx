//This function open links  on the separate page
// in the Reach Text retrieved from Contentful

import { INLINES } from "@contentful/rich-text-types";

const richTextRenderOptions = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      const url = node.data.uri;
      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
  },
};

export default richTextRenderOptions;
