import React from "react";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { Stacked, Pie, Button,
  //  SparkLine 
  } from "../components";

import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import SparkLinechart from "../components/charts/SparkLinechart";

const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div
        className="flex flex-wrap
        lg:flex-nowrap justify-center"
      >
        <div
          className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
        h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xl capitalize text-gray-400">earning</p>
              <p className="text-2xl">$65,789.32</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              type="button"
              size="md"
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        {/* New Section */}
        <div className="flex flex-wrap m-3 justify-center gap-1 items-center">
          {earningData?.map((item) => (
            <div
              key={item.title}
              className="  bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                className="text-3xl rounded-full p-3 opacity-0.9 hover:drop-shadow-2xl"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              >
                {item.icon}
              </button>
              <p className="mt-3 flex justify-between items-center">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span
                  className={`text-sm font-semibold 
                text-${item.pcColor} ml-2`}
                >
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-purple-700 font-extrabold">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Update Section */}
      <div className="flex flex-wrap justify-center gap-10">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="capitalize text-xl font-semibold text-gray-400">
              revenue updates
            </p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl ">
                <span className="text-xl ">
                  <GoDotFill />{" "}
                </span>
                <span className="text-md capitalize">expense </span>
              </p>
              <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl ">
                <span className="text-xl">
                  <GoDotFill />{" "}
                </span>
                <span className="text-md">budget </span>
              </p>
            </div>
          </div>
          {/* charts start */}
          <div className="flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              {/* section : Expense */}
              <div className="mt-8">
                <p>
                  <span className="text-3xl text-purple-700 font-semibold">
                    {" "}
                    $45,320{" "}
                  </span>
                </p>
                <span className="mt-1 text-md text-gray-600">Expense</span>
              </div>
              {/* section : Budget */}
              <div className="mt-8">
                <p>
                  <span className="text-3xl text-purple-700 font-semibold">
                    {" "}
                    $65,325{" "}
                  </span>
                  <span className="text-white text-xs font-semibold bg-green-500 rounded-lg px-2 hover:drop-shadow-xl cursor-pointer">
                    25%
                  </span>
                </p>
                <span className="mt-1 text-md text-gray-600">Budget</span>
              </div>
              {/*  sparkline cahrt */}
              <div className="mt-5 bg-blue-200 rounded-md p-5">
                <SparkLinechart
                  currentColor="#2dd4bf"
                  id="line-sparkline"
                  type="Line" 
                  height="200px"
                  width="250px"
                  data={SparklineAreaData}
                  color="#0f766e"
                />
              </div>

              <div className="mt-10">
                <Button color='white' bgColor={'blue'} text='Download Report' borderRadius={'10px'}  />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
