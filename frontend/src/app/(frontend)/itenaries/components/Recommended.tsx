import React from "react";
import ItenariesCard from "./ItenariesCard";
import "@mantine/core/styles.css";

const Recommended = () => {
  return (
    <div className="px-20">
      <h1>RECOMMENDED FOR YOU</h1>
      <div className="grid grid-cols-3 gap-x-16">
        <ItenariesCard />
      </div>
    </div>
  );
};

export default Recommended;
