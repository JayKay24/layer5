import React, { useState } from "react";
import { HiOutlineChevronLeft } from "@react-icons/all-files/hi/HiOutlineChevronLeft";
import { Link } from "gatsby";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";
import { IoIosArrowDropdownCircle } from "@react-icons/all-files/io/IoIosArrowDropdownCircle";

// import { content } from "./content";

const content = [
  { id: 0, link: "/projects/sistent/about", text: "About Sistent" },
  {
    id: 1,
    link: "/projects/sistent/identity",
    text: "Identity",
    children: [
      {
        id: 1.1,
        text: "Colors",
        link: "/projects/sistent/identity/colors",
      },
      {
        id: 1.2,
        text: "Typography",
        link: "/projects/sistent/identity/typography",
      },
      {
        id: 1.3,
        text: "Spacing",
        link: "/projects/sistent/identity/spacing",
      },
    ],
  },
  { id: 2, link: "/projects/sistent/components", text: "Components" },
];

import TOCWrapper from "./toc.style";
import {
  Accordion,
  AccordionBody,
  AccordionItem,
  AccordionTitle,
  CloseIcon,
  IconWrapper,
  OpenIcon,
} from "../../reusecore/Accordion";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";

const TOC = () => {
  const [expand, setExpand] = useState(false);

  const [expandIdenity, setExpandIdentity] = useState(false);

  return (
    <TOCWrapper>
      <div className="go-back">
        <Link to="/projects/sistent">
          <HiOutlineChevronLeft />
          <h4>Table of Contents</h4>
        </Link>
        <div className="toc-toggle-btn">
          {expand ? (
            <IoMdClose
              className="toc-menu-icon"
              onClick={function () {
                setExpand(!expand);
              }}
            />
          ) : (
            <IoIosArrowDropdownCircle
              className="toc-menu-icon"
              onClick={function () {
                setExpand(!expand);
              }}
            />
          )}
        </div>
      </div>
      <div className="toc-list">
        <ul className={`toc-ul ${expand ? "toc-ul-open" : ""}`}>
          <li>
            <Link
              to="/projects/sistent/about"
              className="toc-sub-heading toc-sub-inline"
              activeClassName="active"
            >
              About
            </Link>
          </li>
          <li>
            <div>
              <li
                className="toc-sub-heading identity"
                onClick={() => setExpandIdentity((prev) => !prev)}
              >
                Idenitity
                <IoIosArrowDown />
              </li>
              {expandIdenity && (
                <div className="identity-sublinks">
                  <li>
                    <Link
                      to="/projects/sistent/identity/color"
                      className="toc-sub-heading toc-sub-inline identity-item"
                      activeClassName="active"
                    >
                      Color
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/projects/sistent/identity/spacing"
                      className="toc-sub-heading toc-sub-inline identity-item"
                      activeClassName="active"
                    >
                      Spacing
                    </Link>
                  </li>
                </div>
              )}
            </div>
          </li>
          <li>
            <Link
              to="/projects/sistent/components"
              activeClassName="active"
              className="toc-sub-heading toc-sub-inline"
            >
              Components
            </Link>
          </li>
        </ul>
      </div>
    </TOCWrapper>
  );
};

export default TOC;
