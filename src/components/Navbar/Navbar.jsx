import React from "react";
import appLogoImg from "../../assets/nitex_logo.png";
import { Icon } from "@iconify/react";
import { Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import CustomButton from "../CustomButton/CustomButton";

const Navbar = () => {
  function MobileNavLink({ children, href, ...props }) {
    return (
      <Popover.Button
        href={href}
        className="block text-base leading-7 tracking-tight text-gray-700"
        {...props}
      >
        <a href={href}> {children}</a>
      </Popover.Button>
    );
  }

  return (
    <nav>
      <div
        className="max-w-7xl
    mx-auto py-8 px-4 relative z-50"
      >
        <div className="flex justify-between items-center">
          {/* Nav logo */}
          <div className="z-10">
            <a href="/">
              <img src={appLogoImg} alt="app logo" className="w-[140px] md:w-full" />
            </a>
          </div>

          {/*all Nav Links are here */}
          <div className="hidden lg:flex justify-between items-center sm:gap-4 md:gap-8 ">
            <a
              href="#services"
              className="cursor-pointer no-underline text-gray-700"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="cursor-pointer no-underline text-gray-700"
            >
              Testimonials
            </a>
            <a
              href="#ourCollection"
              className="cursor-pointer no-underline text-gray-700"
            >
              Our Collection
            </a>
            
            <a
              href="#aboutUs"
              className="cursor-pointer no-underline text-gray-700"
            >
              About Us
            </a>
          </div>

          <div className="flex gap-4 items-center">
            {/*Only For mobile view */}
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        // <ChevronUpIcon className="h-6 w-6" />
                        <Icon
                          icon="carbon:close-filled"
                          width="45px"
                          height="45px"
                        />
                      ) : (
                        // <MenuIcon className="h-6 w-6" />

                        <Icon
                          width="45px"
                          height="45px"
                          icon="ion:reorder-three-outline"
                        />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="#services">
                              Services
                            </MobileNavLink>
                            <MobileNavLink href="#testimonials">
                              Testimonials
                            </MobileNavLink>
                            <MobileNavLink href="#ourCollection">
                              Our Collection
                            </MobileNavLink>
                            
                            <MobileNavLink href="#aboutUs">
                              About Us
                            </MobileNavLink>

                            <div className="flex flex-col gap-3">
                              <div>
                                <MobileNavLink href="#logIn">
                                  <CustomButton
                                    href="/#login"
                                    className="px-[11px] py-[7px]  border-solid border-[1px] rounded-lg cursor-pointer"
                                  >
                                    Log in
                                  </CustomButton>
                                </MobileNavLink>
                              </div>
                              <div>
                                <MobileNavLink href="/#downloadApp">
                                  <CustomButton className=" px-[11px] py-[7px] bg-black text-white border-solid border-[1px] rounded-lg cursor-pointer ">
                                    Download Our App
                                  </CustomButton>
                                </MobileNavLink>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>

            <CustomButton
              href="#login"
              className="hidden lg:block px-[11px] py-[7px] border-gray-600 border-solid border-[1px] rounded-lg cursor-pointer"
            >
              Login
            </CustomButton>

            <CustomButton
              href="#downloadOurApp"
              variant="contained"
              className="hidden lg:block px-[12px] py-[8px] rounded-lg bg-black text-white"
            >
              Download Our App
            </CustomButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
