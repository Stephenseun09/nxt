import { useRef, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const countData = [
  {
    count: 10000,
    description: "Customers around Africa",
  },
  {
    count: 60,
    description: "Employees in Nigeria",
  },
  {
    count: 20,
    description: "Partners in Africa",
  },
  {
    count: 4,
    description: "Investments in Nigeria",
  },
];

const Counter = () => {
  const [count, setCount] = useState(false);
  const ref = useRef(null);

  return (
    <>
      <section className="px-4 sm:px-6 md:px-8 max-w-[82rem] mx-auto">
        <div className="mt-16 sm:mt-24  lg:mt-20 md:grid-cols-4 mx-auto  grid grid-cols-2  gap-4 justify-items-center items-start ">
          {countData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-fit justify-center "
              ref={ref}
            >
              <CountUp
                start={0}
                end={item.count}
                duration={2}
                separator=","
                suffix={index === 1 ? "+" : ""}
                className="leading-tight"
              >
                {({ countUpRef, start }) => (
                  <motion.span
                    ref={countUpRef}
                    className="text-primary font-bold text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px]"
                    viewport={{ once: true }}
                    onViewportEnter={() => {
                      if (!count) {
                        start();
                        setCount(true);
                      }
                      return;
                    }}
                  />
                )}
              </CountUp>
              <p className="text-paragraph text-sm text-center text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Counter;
