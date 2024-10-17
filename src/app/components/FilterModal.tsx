"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import FilterBtn from "./FilterBtn";

type Props = {
  handleClips: (clips: any[]) => void;
};

const filters = [
  {
    id: "player",
    name: "Player",
    options: [
      { value: "Tubs", label: "Tubs" },
      { value: "Walkblind", label: "Walk" },
      { value: "Potat", label: "Potat" },
      { value: "Bon", label: "Bon" },
      { value: "Rub", label: "Rub" },
      { value: "Banx", label: "Banx" },
      { value: "AJ", label: "AJ" },
      { value: "Taff", label: "Taff" },
      { value: "Alina", label: "Alina" },
      { value: "Wyvern", label: "Wyvern" },
    ],
  },
  {
    id: "hero",
    name: "Hero",
    options: [
      { value: "Ana", label: "Ana" },
      { value: "Rein", label: "Rein" },
      { value: "Genji", label: "Genji" },
      { value: "Hanzo", label: "Hanzo" },
      { value: "McCree", label: "McCree" },
    ],
  },
  //   {
  //     id: "sizes",
  //     name: "Sizes",
  //     options: [
  //       { value: "xs", label: "XS" },
  //       { value: "s", label: "S" },
  //       { value: "m", label: "M" },
  //       { value: "l", label: "L" },
  //       { value: "xl", label: "XL" },
  //       { value: "2xl", label: "2XL" },
  //     ],
  //   },
];

const FilterModal = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [filterItems, setFilterItems] = useState<string[]>([]);

  useEffect(() => {
    props.handleClips(filterItems);
  }, [filterItems]);

  return (
    <>
      <FilterBtn
        onClick={() => {
          setOpen(true);
        }}
      />
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
                        Filter Videos
                      </DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    {/* Your content */}
                    <form className="mt-4">
                      {filters.map((section) => (
                        <Disclosure
                          key={section.name}
                          as="div"
                          className="border-t border-gray-200 pb-4 pt-4"
                        >
                          <fieldset>
                            <legend className="w-full px-2">
                              <DisclosureButton className="group flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                                <span className="text-sm font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                  <ChevronDownIcon
                                    aria-hidden="true"
                                    className="h-5 w-5 rotate-0 transform group-data-[open]:-rotate-180"
                                  />
                                </span>
                              </DisclosureButton>
                            </legend>
                            <DisclosurePanel className="px-4 pb-2 pt-4">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      defaultValue={option.value}
                                      id={`${section.id}-${optionIdx}-mobile`}
                                      name={`${section.id}[]`}
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      onChange={(e) => {
                                        setFilterItems((prev) => {
                                          if (e.target.checked) {
                                            return [...prev, e.target.value];
                                          } else {
                                            return prev.filter(
                                              (item) => item !== e.target.value,
                                            );
                                          }
                                        });
                                      }}
                                    />
                                    <label
                                      htmlFor={`${section.id}-${optionIdx}-mobile`}
                                      className="ml-3 text-sm text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </DisclosurePanel>
                          </fieldset>
                        </Disclosure>
                      ))}
                    </form>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default FilterModal;
