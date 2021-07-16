import React from "react";
import Link from "next/link";

const custom404 = () => {
  return (
    <div>
      <h1>Oops! You found a top secret area that's still being developed...</h1>
      <Link href="/work">
        <a>
          <h3>Click here to head back</h3>
        </a>
      </Link>
    </div>
  );
};

export default custom404;
