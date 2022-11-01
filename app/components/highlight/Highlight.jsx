import hljs from "highlight.js";

export default function Highlighter({ content, language }) {
  const highlighted = language
    ? hljs.highlight(content, { language })
    : hljs.highlightAuto(content);

  return (
    <pre className="hljs min-h-full max-w-full overflow-auto whitespace-pre-wrap p-4">
      <code dangerouslySetInnerHTML={{ __html: highlighted.value }} />
    </pre>
  );
}
