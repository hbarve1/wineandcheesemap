import { h } from "preact";
import { useMemo } from "preact/hooks";

const NodeInfo = ({ node }) => {
  const data = node.data();
  const { name, NodeTypeFormatted, Type, Milk, Country, NodeType } = data;

  const type = useMemo(
    () => NodeTypeFormatted + (Type ? ` (${Type})` : ""),
    [NodeTypeFormatted, Type]
  );

  const q = useMemo(
    () => encodeURIComponent(NodeType === "Cheese" ? `${name} cheese` : name),
    [NodeType, name]
  );

  return (
    <div class="node-info">
      <div class="node-info-name">{name}</div>
      <div class="node-info-type">{type}</div>
      {Milk && <div class="node-info-milk">{Milk}</div>}
      {Country && <div class="node-info-country">{Country}</div>}
      <div class="node-info-more">
        <a target="_blank" href={`https://google.com/search?q=${q}`}>
          More information
        </a>
      </div>
    </div>
  );
};

export default NodeInfo;
export { NodeInfo };
