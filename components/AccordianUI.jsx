"use client";

import { useState } from "react";
import { Accordion,AccordionHeader,AccordionBody,} from "@material-tailwind/react";
import AllUsers from "../components/AllUsers";
import SpecificUser from "../components/SpecificUser";

const AccordianUI = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value );
  return (
  <section className="w-[40rem]">
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          All Users
        </AccordionHeader>
        <AccordionBody>
         <AllUsers/>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2}>
  {/*  Search for a specific  User  */}
  <AccordionHeader onClick={() => handleOpen(2)}>
          Search for a specific  User
        </AccordionHeader>
        <AccordionBody>
        <SpecificUser/>
        </AccordionBody>
        {/*   Search for a specific  User */}
      </Accordion>
  </section>
  )
}
export default AccordianUI;