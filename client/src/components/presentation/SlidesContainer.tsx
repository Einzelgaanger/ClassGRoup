import { Introduction } from "./slides/Introduction";
import { Arrays } from "./slides/Arrays";
import { LinkedLists } from "./slides/LinkedLists";
import { StacksQueues } from "./slides/StacksQueues";
import { Trees } from "./slides/Trees";
import { HashTables } from "./slides/HashTables";
import { Graphs } from "./slides/Graphs";
import { Summary } from "./slides/Summary";

export function SlidesContainer() {
  return (
    <div className="slides-container pt-16">
      <Introduction />
      <Arrays />
      <LinkedLists />
      <StacksQueues />
      <Trees />
      <HashTables />
      <Graphs />
      <Summary />
    </div>
  );
}
