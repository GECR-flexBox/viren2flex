import React from "react";

const Homepage = () => {
  return <div id="temp">home</div>;
};

export async function getServerSideProps(context) {
  
  const res = await fetch('https://example.com/data');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Homepage;