import MegaMenu1 from "../MegaMenu1";
import { Img, Text, Heading } from "./..";
import React from "react";

export default function Header5({ ...props }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header {...props} className={`${props.className} flex justify-end items-center w-full mb-[46px]`}>
      <div className="relative h-[26px] w-[40%]">
        <Heading
          size="headingxs"
          as="p"
          className="absolute bottom-0 right-[21%] top-0 my-auto h-max w-[26px] rounded-[12px] bg-green-100 p-1 text-[12px] font-semibold tracking-[-0.48px] text-green-900"
        >
          UN
        </Heading>
        <ul className="absolute bottom-0 left-0 right-0 top-0 !m-auto flex h-max gap-[74px] sm:relative sm:flex-col">
          <li>
            <a href="#">
              <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_01">
                Sign up as a pro
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_01">
                Projects
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_01">
                Inbox
              </Text>
            </a>
          </li>
          <li
            onMouseLeave={() => {
              setMenuOpen(false);
            }}
            onMouseEnter={() => {
              setMenuOpen(true);
            }}
          >
            <div className="flex cursor-pointer items-center gap-3">
              <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_01">
                User name
              </Text>
              <Img src="images/img_arrowdown_black_900_02.svg" alt="Dropdown Icon" className="mb-2 h-[3px] w-[8px]" />
            </div>
            {menuOpen ? <MegaMenu1 /> : null}
          </li>
        </ul>
      </div>
    </header>
  );
}
