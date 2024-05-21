"use client";

import React, { useRef,useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import Container from "@/components/Container";



const SearchBar = () => {


  // searchbar
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchExpanded(false);
      }
    };

    if (isSearchExpanded) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isSearchExpanded]);

  const toggleSearchBar = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  const classProperty = {
    styles: "text-xl p-2 rounded-full hover:bg-gray-200/75",
  };
  return (
    <div>
      <Container>
        <div className="flex gap-4 items-center cursor-pointer">
          {/* search and button */}

          <div className={`flex items-center space-x-10`} ref={searchRef}>
            <input
              type="text"
              placeholder="Search"
              className={`  placeholder-gray-700 bg-gray-300 focus:outline outline-blue-600 focus:shadow-outline ${
                isSearchExpanded
                  ? "w-64 px-3 py-1.5 outline outline-1 outline-gray-300"
                  : "w-0"
              } transition-all duration-500`}
            />

            <AiOutlineSearch
              onClick={toggleSearchBar}
              className=" text-xl cursor-pointer "
            >
              {isSearchExpanded ? "Close" : "Search"}
            </AiOutlineSearch>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchBar;
