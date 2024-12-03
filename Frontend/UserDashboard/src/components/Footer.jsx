
"use client";

import { Footer } from "flowbite-react";

export function FooterComponent() {
  return (
    <Footer container className="rounded-none h-[150px] bg-[#1A120B] text-white mt-6">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:justify-between">
          <Footer.Brand
            href=""
            src=""
            alt="Flowbite Logo"
            name="Nature Nest"
            className="text-white"
          />
          <Footer.LinkGroup className="gap-3">
            <Footer.Link href="#" className="text-white">About</Footer.Link>
            <Footer.Link href="#" className="text-white">Privacy Policy</Footer.Link>
            <Footer.Link href="#" className="text-white">Licensing</Footer.Link>
            <Footer.Link href="#" className="text-white">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider className="text-white" />
        <Footer.Copyright href="#" by="Nature Nest" year={2024} />
      </div>
    </Footer>
  );
}
