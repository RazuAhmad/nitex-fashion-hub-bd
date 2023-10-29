import React from 'react'
import appLogoImg from '../../assets/nitex_logo.png'
import threeLineImg from '../../assets/three-line.svg'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

const Navbar = () => {

    function MobileNavLink({ children, ...props }) {
        return (
          <Popover.Button
            
            className="block text-base leading-7 tracking-tight text-gray-700"
            {...props}
          >
            {children}
          </Popover.Button>
        )
      }



  return (
    <nav >
        <div className='max-w-7xl
    mx-auto py-8 px-4 relative z-50'>
        <div className="flex justify-between items-center">
            <div className='z-10'>
            <img src={appLogoImg} alt='app logo' />
            </div>

            {/* Nav Links */}
            <div className="hidden lg:flex justify-between items-center sm:gap-4 md:gap-8">
                <p className='cursor-pointer'>Features</p>
                <p className='cursor-pointer'>Reviews</p>
                <p className='cursor-pointer'>Pricing</p>
                <p className='cursor-pointer'>FAQs</p>
                <p className='cursor-pointer'>About Us</p>
            </div>

            <div className="flex gap-4 items-center">

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
                       <image src={threeLineImg} alt='threeLine' width="512" height="512" />
                      ) : (
                        // <MenuIcon className="h-6 w-6" />
                        <image width="512" height="512" src={threeLineImg} alt='threeLine' />
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
                            <MobileNavLink href="/#features">
                              Features
                            </MobileNavLink>
                            <MobileNavLink href="/#reviews">
                              Reviews
                            </MobileNavLink>
                            <MobileNavLink href="/#pricing">
                              Pricing
                            </MobileNavLink>
                            <MobileNavLink href="/#faqs">FAQs</MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <button href="/login" variant="outline">
                              Log in
                            </button>
                            <button href="#">Download the app</button>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>


                <button className='hidden lg:block px-[11px] py-[7px] border-gray-600 border-solid border-[1px] rounded-lg cursor-pointer'>Login</button>
                <button className='hidden lg:block px-[12px] py-[8px] rounded-lg bg-black text-white'>Download</button>
            </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar