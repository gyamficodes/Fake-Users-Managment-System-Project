"use client";

import { useState } from "react";
import { Accordion,AccordionHeader,AccordionBody,} from "@material-tailwind/react";
import AllUsers from "../components/AllUsers";
import SpecificUser from "../components/SpecificUser";
import CreateUser from "../components/CreateUser";
import UpdateUser from "../components/UpdateUser"
import DeleteUser from "../components/DeleteUser"


const AccordianUI = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value );
  return (
  <section className="w-[40rem] ">
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


      
      <Accordion open={open === 3}>
  {/*     Create a user  */}
  <AccordionHeader onClick={() => handleOpen(3)}>
          Create a user
        </AccordionHeader>
        <AccordionBody>
       <CreateUser/>
        </AccordionBody>
        {/*      Create a user */}
      </Accordion>

      
      
      <Accordion open={open === 4}>
  {/*     Update a user  */}
  <AccordionHeader onClick={() => handleOpen(4)}>
          Update User
        </AccordionHeader>
        <AccordionBody>
     <UpdateUser/>
        </AccordionBody>
        {/*      Create a user */}
      </Accordion>

      <Accordion open={open === 5}>
  {/*     Delete a user  */}
  <AccordionHeader onClick={() => handleOpen(5)}>
          Delete User
        </AccordionHeader>
        <AccordionBody>
        <DeleteUser/>
        </AccordionBody>
        {/*      Create a user */}
      </Accordion>
  </section>
  )
}
export default AccordianUI;