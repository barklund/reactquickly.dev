import { useParams } from "@remix-run/react";
import { a, b } from "public/build/_shared/chunk-AKSB5QXU";
import { useEffect, useState } from "react";
import repositories from "~/config/repositories.json";

export const TABS = [
  { label: "Information", link: "info" },
  { label: "Browse", link: "browse" },
  { label: "Try", link: "try" },
];
const IMAGES = ["ico", "svg", "png", "jpg", "gif"];
const MIMETYPE = {
  png: "image/png",
  jpg: "image/jpg",
  svg: "image/svg+xml",
  gif: "image/gif",
  ico: "image/x-icon",
};

const getExtension = (str) => /(?:\.([^.]+))?$/.exec(str)?.[1];

const checkImage = (filename) => IMAGES.includes(getExtension(filename));

function getLanguage(extension) {
  switch (extension) {
    case "gitignore":
      return "shell";
    default:
      return extension;
  }
}

function getName(path) {
  return path.replace(/\/$/, "").split("/").pop();
}

function sortFiles(fileList) {
  fileList.sort((a, b) => {
    const nameSort = a.name < b.name ? -1 : 1;
    if (a.children && b.children) {
      return nameSort;
    }
    return a.children ? -1 : b.children ? 1 : nameSort;
  });
  return fileList;
}

function getNextNode(list, offset) {
  const { name, ...rest } = list[offset];
  const node = { name: getName(name) };
  let newOffset = offset + 1;
  const children = [];
  while (true) {
    const next = list[newOffset];
    if (!next?.name.startsWith(name)) {
      break;
    }
    const response = getNextNode(list, newOffset);
    children.push(response.node);
    newOffset = response.offset;
  }
  if (children.length) {
    node.children = sortFiles(children);
    node.isOpen = node.name === "src" || offset === 0;
  } else {
    Object.assign(node, rest);
  }
  return { node, offset: newOffset };
}
function getTree(list) {
  return getNextNode(list, 0).node;
}

export function useRepo() {
  const params = useParams();
  const [filetree, setFiletree] = useState({});
  const repo = repositories[params.chapter][params.repo];
  useEffect(() => {
    const readZip = async () => {
      const zipJs = await require("@zip.js/zip.js");
      fetch(repo.content)
        .then((res) => new zipJs.ZipReader(res.body).getEntries())
        .then((files) =>
          Promise.all(
            files.map(async (file) => {
              if (file.filename.endsWith("/")) {
                return { name: `${params.repo}/${file.filename}` };
              }
              const isImage = checkImage(file.filename);
              const contentWriter = isImage
                ? new zipJs.Uint8ArrayWriter()
                : new zipJs.TextWriter();
              const content = await file.getData(contentWriter);
              const baseNode = {
                name: `${params.repo}/${file.filename}`,
                content,
              };
              if (isImage) {
                return {
                  ...baseNode,
                  isImage: true,
                  mimetype: MIMETYPE[getExtension(file.filename)],
                };
              }
              return {
                ...baseNode,
                language: getLanguage(getExtension(file.filename)),
              };
            })
          )
        )
        .then((list) =>
          setFiletree(getTree([{ name: params.repo }].concat(list)))
        );
    };
    readZip();
  }, [repo.content]);
  return {
    ...repo,
    id: params.repo,
    chapter: parseInt(params.chapter.slice(2, 4)),
    filetree,
    tabs: [
      ...TABS,
      { label: "Download", link: repo.content, target: "_blank" },
    ],
  };
}
