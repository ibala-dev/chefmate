import ReactMarkdown from "react-markdown";
import recipeCode from "../recipeCode.md?raw";

export function Recipe() {
  return (
    <section>
      <ReactMarkdown>{recipeCode}</ReactMarkdown>
    </section>
  );
}