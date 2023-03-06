import { useState } from "react";
import { Tablist, FileTree, Highlight } from "~/components";
import { useRepo } from "./_util";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/default.min.css",
    },
  ];
}

function Image({ content, mimetype }) {
  const [size, setSize] = useState("");
  const setSrc = (node) => {
    if (!node) return;
    node.src = URL.createObjectURL(
      new Blob([content.buffer], { type: mimetype })
    );
    node.addEventListener("load", () => {
      node.width = node.naturalWidth;
      setSize(`${node.naturalWidth}px × ${node.naturalHeight}px`);
    });
  };

  return (
    <div className="w-full h-full flex flex-col gap-2 items-center justify-center bg-gray-500">
      <img alt="" className="max-w-md" ref={setSrc} />
      <p>{size}</p>
    </div>
  );
}

function ActiveNode({ node }) {
  if (node.isImage) {
    return <Image content={node.content} mimetype={node.mimetype} />;
  }
  return <Highlight content={node.content} language={node.language} />;
}

function Browse() {
  const repo = useRepo();
  const [activeNode, setActiveNode] = useState(null);
  return (
    <>
      <Tablist tabs={repo.tabs} current="browse" />
      <div className="flex items-stretch flex-grow max-w-full w-full overflow-hidden">
        <div className="w-[300px] text-sm border-r-2 overflow-auto">
          <FileTree files={repo.filetree} onClick={setActiveNode} />
        </div>
        <div className="w-full w-max-full h-full overflow-auto">
          {activeNode && <ActiveNode node={activeNode} />}
        </div>
      </div>
    </>
  );
}

export default Browse;
 