import React from "react";

export default function TestPage() {
  //
  React.useEffect(() => {
    console.log("we are on the test page");
  }, []);
  //
  return (
    <div>
      <h1>test</h1>
      <h5>page</h5>
    </div>
  );
}
