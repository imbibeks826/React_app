import React from "react";

export const HomePage = () => {
  return (
    <>
      <div style={{
          display: "flex",
          flex: 1,
          height: "100vh",
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "white" }}>Hello, Bibek!</h1>
      </div>
    </>
  );
};

export default HomePage;
