import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

const LoadingBtn = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <div id="btn">
      <Button disabled={isLoading} onClick={!isLoading ? handleClick : null}>
        {isLoading ? "Loading..." : "Download Cv"}
      </Button>
    </div>
  );
};

export default LoadingBtn;
