import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import AOS from "aos";

AOS.init();

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Example() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="p-4 sm:p-28 xl:p-42 mb-20 sm:mb-0 bg-black dark:bg-[#ebe2e2] dark:text-black">
      <h1 className="sf text-center drop-shadow-[0_0px_35px_#007bc4] text-[#007bc4] mb-14 text-4xl heading">
        FREQUENTLY ASKED QUES
      </h1>
      <Fragment >
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            data-aos="fade-up"
            style={{ fontFamily: "Sf", transition: "all 500ms" }}
            onClick={() => handleOpen(1)}
            className=" text-white dark:text-black hover:text-[#007bc4] hover:drop-shadow-[0_0px_35px_#007bc4]"
          >
            What is Wartex ?
          </AccordionHeader>
          <AccordionBody
            style={{ fontFamily: "Sf", transition: "all 500ms" }}
            className="text-white dark:text-black text-[15px]"
          >
            Wartex is one of the most highly anticipated school tech event in Delhi. This
            event regularly attracts a diverse range of attendees from almost
            all schools of delhi NCR, across different classes; and offers an
            enthralling experience to last the whole year.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader
            style={{ fontFamily: "Sf", transition: "all 500ms" }}
            data-aos="fade-up"
            onClick={() => handleOpen(2)}
            className="text-white hover:text-[#007bc4]  hover:drop-shadow-[0_0px_35px_#007bc4]"
          >
            How can i participate ?
          </AccordionHeader>
          <AccordionBody
            style={{ fontFamily: "Sf", transition: "all 500ms" }}
            className=" text-white text-[15px] dark:text-black"
          >
            You can register through the link given on the website, the link is
            also present in the discord server. However, if your school is not
            registering, you can still register individually in cryptic hunt ONLY .

          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader
            style={{ fontFamily: "Sf", transition: "all 500ms" }}
            data-aos="fade-up"
            onClick={() => handleOpen(3)}
            className="text-white dark:text-black hover:text-[#007bc4]  hover:drop-shadow-[0_0px_35px_#007bc4]"
          >
            Who can participate ?
          </AccordionHeader>
          <AccordionBody
            style={{ fontFamily: "Sf", transition: "all 500ms" }}
            className="text-white text-[15px] dark:text-black"
          >
            Any student currently going to school in Delhi NCR can participate
            in Wartex according to their class and event's criteria.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader
            style={{ fontFamily: "Sf", transition: "all 500ms" }}
            data-aos="fade-up"
            onClick={() => handleOpen(4)}
            className="text-white dark:text-black hover:text-[#007bc4]  hover:drop-shadow-[0_0px_35px_#007bc4]"
          >
            When will the event take place ?
          </AccordionHeader>
          <AccordionBody
            style={{ fontFamily: "Sf", transition: "all 500ms" }}
            className="text-white text-[15px] dark:text-black"
          >
            The event will take place on 26 October, 2023.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
          <AccordionHeader
            style={{ fontFamily: "Sf", transition: "all 500ms" }}
            data-aos="fade-up"
            onClick={() => handleOpen(5)}
            className="text-white dark:text-black hover:text-[#007bc4]  hover:drop-shadow-[0_0px_35px_#007bc4]"
          >
            Is it mandatory to join the Discord server ?
          </AccordionHeader>
          <AccordionBody
            style={{ fontFamily: "Sf", transition: "all 500ms" }}
            className="text-white text-[15px] dark:text-black  "
          >
            Yes, it is mandatory to join the discord server as there will be many
            updates regarding the events, the raw files for event like rework
            render will be given on Discord only.
          </AccordionBody>
        </Accordion>
      </Fragment>
    </div>
  );
}
