/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GiPayMoney } from "react-icons/gi";
import { SiKofi } from "react-icons/si";

import clsxm from "@/lib/helpers/clsxm";

import UnderlineLink from "../links/UnderlineLink";
import UnstyledLink from "../links/UnstyledLink";

const FooterComponent = () => {
  return (
    <footer
      className={clsxm(
        "mx-auto max-w-4xl py-16 px-4 md:px-1",
        "flex flex-wrap items-center justify-center gap-2 sm:justify-between"
      )}
    >
      <div
        className={clsxm(
          "flex flex-wrap items-end justify-center",
          "gap-6 md:justify-start"
        )}
      >
        {new Date().getFullYear()} | Luqman Abdur Rohim
      </div>
      <div className="inline-flex gap-6">
        <UnderlineLink href="https://saweria.co/keizercode" className="gap-1">
          <GiPayMoney size={20} /> Support me on Saweria
        </UnderlineLink>
      </div>
    </footer>
  );
};

export default FooterComponent;
