import { h } from "preact";
import { useEffect } from "preact/hooks";

const CytoscapeComponent = ({ cy, controller }) => {

  useEffect(() => {
    const container = document.getElementById("cy");

    cy.mount(container);
    cy.fit(10);

    const onTap = (e) => {
      if (e.target === cy) {
        controller.unhighlight();
        controller.hideInfo();
        controller.closeMenu();
      } else {
        controller.highlight(e.target);
        controller.showInfo(e.target);
        controller.closeMenu();
      }
    };

    cy.on("tap", onTap);

    return () => {
      cy.removeListener("tap", onTap);
    };
  }, [cy, controller]);

  return <div id="cy" />;
};

export default CytoscapeComponent;
export { CytoscapeComponent };