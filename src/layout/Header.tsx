import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}

        <div>
          <Image src="/images/logo.png" alt="logo" width={10} height={10} />
        </div>
        <div> hello</div> <div></div>
      </div>
    </header>
  );
};

export default Header;
