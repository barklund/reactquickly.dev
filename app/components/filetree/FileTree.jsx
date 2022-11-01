import { useState } from "react";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import cx from "classnames";

const getExtension = (str) => /(?:\.([^.]+))?$/.exec(str)?.[1];

function getFileIcon(filename) {
  const getIcon = (type) => `/icons/filetype-${type}.svg`;
  switch (getExtension(filename)) {
    case "png":
      return getIcon("png");
    case "svg":
      return getIcon("svg");
    case "js":
    case "jsx":
    case "ts":
    case "tsx":
      return getIcon("js");
    case "json":
      return getIcon("json");
    case "html":
      return getIcon("html");
    case "css":
      return getIcon("css");
    default:
      return getIcon("generic");
  }
}

function Node({ node, path = "", indent = 0, selected, onSelect }) {
  const [isOpen, setOpen] = useState(node.isOpen);
  node = typeof node === "string" ? { name: node } : node;
  path = `path/${node.name}`;
  const hasChildren = "children" in node;
  const indentation = (
    <span className="shrink-0" style={{ width: `${indent * 1}em` }}>
       
    </span>
  );
  if (!hasChildren) {
    return (
      <button
        className={cx("flex gap-1 items-center px-2 py-1 hover:bg-blue-50", {
          "!bg-blue-100": selected === path,
        })}
        onClick={() => onSelect(path, node)}
      >
        {indentation}
        <img src={getFileIcon(node.name)} width="16" alt="" />
        {node.name}
      </button>
    );
  }
  return (
    <>
      <button
        className="flex gap-1 items-center px-2 py-1 hover:bg-blue-50"
        onClick={() => setOpen((v) => !v)}
      >
        {indentation}
        {isOpen ? <FaFolderOpen /> : <FaFolder />}
        {node.name}
      </button>
      {isOpen &&
        node.children.map((child) => (
          <Node
            node={child}
            indent={indent + 1}
            key={child?.name || child}
            onSelect={onSelect}
            selected={selected}
            path={path}
          />
        ))}
    </>
  );
}
function FileTree({ files, onClick, defaultSelected = null }) {
  if (!files.name) return;
  const [selected, setSelected] = useState(defaultSelected);
  const onSelect = (path, node) => {
    setSelected(path);
    onClick(node);
  };
  return (
    <div className="flex flex-col items-stretch">
      <Node node={files} selected={selected} onSelect={onSelect} />
    </div>
  );
}

export default FileTree;
