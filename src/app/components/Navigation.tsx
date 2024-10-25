"use client";

import Image from "next/image";
import Link from "next/link";
import { OverwatchLogo, WoWLogo, DBDLogo, MinecraftLogo } from "./Logos";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Overwatch 2",
    description: "Get a better understanding of your traffic",
    href: "/games/overwatch2",
    icon: OverwatchLogo,
  },
  {
    name: "World of Warcraft",
    description: "Speak directly to your customers",
    href: "/games/worldofwarcraft",
    icon: WoWLogo,
  },
  {
    name: "Dead by Daylight",
    description: "Your customers’ data will be safe and secure",
    href: "/games/deadbydaylight",
    icon: DBDLogo,
  },
  {
    name: "Minecraft",
    description: "Build strategic funnels that will convert",
    href: "/games/minecraft",
    icon: MinecraftLogo,
  },
  {
    name: "Deadlock",
    description: "Connect with third-party tools",
    href: "/games/deadlock",
    icon: LockClosedIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">PigFarm Club</span>
            <Image
              className="transition-all hover:scale-125"
              src="/taco-smile.png"
              alt="Taco Placeholder"
              width={38}
              height={32}
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link href="/clips" className="text-sm font-semibold leading-6">
            Clips
          </Link>
          <Link href="/roster" className="text-sm font-semibold leading-6">
            Roster
          </Link>
          <Link href="/aboutus" className="text-sm font-semibold leading-6">
            About Us
          </Link>
          <Link href="/calendar" className="text-sm font-semibold leading-6">
            Calendar
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6">
            Members <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">PigFarm Club</span>
              <Image
                className="transition-all hover:scale-125"
                src="/taco-smile.png"
                alt="Taco Placeholder"
                width={38}
                height={32}
                priority
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/clips"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Clips
                </Link>
                <Link
                  href="/roster"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Roster
                </Link>
                <Link
                  href="/aboutus"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/calendar"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Calendar
                </Link>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-50"
                >
                  Members
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
