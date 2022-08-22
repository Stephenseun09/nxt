import Link from "next/link";

interface Obj {
  [key: string]: any;
}

interface Props {
  items: Obj[];
  heading: string;
}

const Investments = [
  { name: "PISI Integrated Services", href: "/" },
  { name: "HelloBudgie Nigeria", href: "#" },
  { name: "ValuePlus", href: "#" },
  { name: "Betacare", href: "#" },
];
const Company = [
  { name: "About", href: "#" },
  { name: "Mission & Vision", href: "#" },
  { name: "Values", href: "#" },
];
const Support = [
  { name: "+234875697789", href: "#" },
  { name: "info@nxt.ng", href: "#" },
  { name: "hello@nxt.ng", href: "#" },
];

const Lists = ({ items, heading }: Props) => {
  return (
    <div>
      <h5 className="font-bold mb-5 text-white text-[17px] sm:text-[18px] md:text-2xl">
        {heading}
      </h5>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] hover:translate-x-1 transition-all text-slate-400 hover:text-white"
          >
            <Link href="#">
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Left = () => {
  return (
    <div className="flex gap-6  md:justify-between  md:col-start-8 md:col-end-13 md:col-6 flex-wrap md:flex-nowrap">
      <Lists items={Investments} heading="Investments" />
      <Lists items={Company} heading="Company" />
      <Lists items={Support} heading="Support" />
    </div>
  );
};

export default Left;
