import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <nav className="flex items-center gap-x-3 justify-between py-3">
      
      {/* Logo */}
      <Link href="/">
        <p className="font-bold text-lg">InfoVoto.pe</p>
      </Link>

      {/* Menu Options */}
      <div>

        {/* Icon Search */}
        <Button>
            first button
        </Button>
      
      </div>


    </nav>
  );
};
