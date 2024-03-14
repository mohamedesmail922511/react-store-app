import React,{useState} from 'react'
import { TEDropdown, TEDropdownToggle, TEDropdownMenu, TEDropdownItem, TERipple, } from "tw-elements-react";
import { IoChevronDown } from "react-icons/io5";

export default function DropDownMenu({ items, defaultSelected, onSelect }) {
    const [selectedItem, setSelectedItem] = useState(defaultSelected);

    const handleSelect = (item) => {
      setSelectedItem(item);
      if (onSelect) {
        onSelect(item);
      }
    };

  return (
    <TEDropdown className="flex justify-center">
    <TERipple rippleColor="light">
        <TEDropdownToggle className="flex items-center whitespace-nowrap rounded px-1 pb-2 pt-2.5 text-xs text-white font-medium  leading-normal transition duration-150 ease-in-out focus:outline-none  motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            {selectedItem}
            <IoChevronDown />
        </TEDropdownToggle>
    </TERipple>

    <TEDropdownMenu>

    {items.map((item, index) => (
        <TEDropdownItem key={index}>
            <a onClick={() => handleSelect(item)} href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
            {item}
            </a>
        </TEDropdownItem>  
    ))}

        {/* <TEDropdownItem>
            <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                Arabic
            </a>
        </TEDropdownItem> */}
        {/* <TEDropdownItem>
            <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                English
            </a>
        </TEDropdownItem> */}
      
    </TEDropdownMenu>
</TEDropdown>
  )
}
