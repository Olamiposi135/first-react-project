import React from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div className="px-3">
        <h1 className="font-bold text-3xl text-emerald-300 w-full">OLAMIPO.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          accusamus doloribus ab veniam modi dolorum id voluptatem fuga sapiente
          quia, minima cupiditate reiciendis perspiciatis atque accusantium
          inventore voluptates culpa consectetur.
        </p>
        <div className="flex md:w-[75%] justify-between my-6">
          <FaInstagram size={30} />
          <FaFacebookSquare size={30} />
          <FaGithubSquare size={30} />
          <FaLinkedin size={30} />
          <FaSquareXTwitter size={30} />
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-around">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Insights</li>
            <li className="py-2 text-sm">Comerce</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Documrntation</li>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blogs</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal Terms</h6>
          <ul>
            <li className="py-2 text-sm">Privacy Policy</li>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Terms & Condition</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
