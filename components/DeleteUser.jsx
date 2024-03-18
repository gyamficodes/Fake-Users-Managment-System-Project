"use client";

import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";

const DeleteUser = () => {
  const [id, setId] = useState("");

  const handdleSubmit = async (e) => {
    e.preventDefault();
    if (!id) {
        alert("Please provide User ID")
        return;
    }
    try {
        const response = await fetch(`/api/users/${id}`, {
            method:"DELETE",
        })
        if(response.ok){
            alert("User succesfully deleted");
            clearForm();
        }else{
            const data = await response.json();
            alert(data || "Something went wrong while deleting user.")
        }
    } catch (error) {
        alert("error")
    }

    
  }

const clearForm =() =>{
    setId("");
}

  return (
    <>
      <form onSubmit={handdleSubmit}>
        <Input
          type="text"
          value={id}
          label="User Id"
          placeholder="User Id"
          onChange={(e) => setId(e.target.value)}
        />

        <Button className=" mt-4" type="submit">Delete User</Button>
      </form>
    </>
  );
};

export default DeleteUser;
