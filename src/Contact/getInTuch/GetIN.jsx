import React from "react";

import "./GetIN.css";
const GetIN = () => {
  return (
    <>
      <div className="justify-evenly bg-slate-100 ">
        <div className="container flex justify-evenly mx-auto px-3">
          <div>
            <div className="flex containe pt-24">
              <img
                src="https://html.themexriver.com/bixol/bixol/assets/images/home1/star-object.png"
                alt=""
              />
              <h5 className="pl-2 font-semibold ">Get In touch</h5>
            </div>
            <div>
              <h1 className="text-4xl font-bold pt-2">We Want To Share Our </h1>
              <h1 className="text-4xl font-semibold pb-8">
                Location To Find Us Easily.
              </h1>
            </div>
            <div className=" border p-6 mb-8  trx1 ease-in duration-300">
              <div className="flex">
                <img
                  className="w-16 "
                  src="https://html.themexriver.com/bixol/bixol/assets/images/home1/star-object.png"
                  alt=""
                />
                <h4 className="text-2xl font-bold">Office Address</h4>
              </div>
              <p className="pl-16">2 holt street, Surry Hills, australia.</p>
            </div>
            <div className=" border p-6 mb-8  trx1 ease-in duration-300">
              <div className="flex">
                <img className="w-16 " src={location} alt="" />
                <h4 className="text-2xl font-bold">Office Address</h4>
              </div>
              <p className="pl-16">2 holt street, Surry Hills, australia.</p>
            </div>
            <div className=" border p-6 mb-8  trx1 ease-in duration-300">
              <div className="flex">
                <img className="w-16 " src={location} alt="" />
                <h4 className="text-2xl font-bold">Office Address</h4>
              </div>
              <p className="pl-16">2 holt street, Surry Hills, australia.</p>
            </div>
          </div>

          <div>
            <div className="pt-28">
              <div>
                <h5 className="pb-4">
                  For any inquiries relating to my Retail and Leadership
                  Programs*
                </h5>
              </div>
              <div>
                <form action="#">
                  <div>
                    <div className="flex">
                      <div className="flex-col flex pb-">
                        <label> Name(required)</label>
                        <input
                          className="border-2 p-3 w-80 bg-white mr-6"
                          type="text"
                          placeholder="Your Name*"
                        />
                      </div>
                      <div className="flex-col flex pb-4">
                        <label className="pb-2">Email address(required)</label>
                        <input
                          className="border-2 p-3 w-80 bg-white"
                          type="email"
                          placeholder="Mail*"
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-col flex pb-">
                        <label className="pb-2">Phone(optional)</label>
                        <input
                          className="border-2 p-3 w-80 bg-white mr-6"
                          type="numder"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="flex-col flex pb-4">
                        <label className="pb-2">Subject(required)</label>
                        <select className="border-2 p-3 w-80 bg-white mr-6">
                          <option value="#">Toilet cleaning</option>
                          <option value="#">House cleaning</option>
                          <option value="#">Office cleaning</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex-col flex pb-">
                      <label className="pb-2"> Name(required)</label>
                      <textarea
                        className="border-2 inpurbig p-3 w-1/1 h-28 bg-white mr-6"
                        type="text"
                        placeholder="Your Name"
                      />
                    </div>
                    <button
                      type="#"
                      className="fas rounded text-lg text-white font-bold buttonclr border w-52 h-14 ease-in duration-300 mt-16"
                    >
                      send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetIN;
